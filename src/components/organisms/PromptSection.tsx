'use client';
import { DownArrowIcon, RandomPromptIcon, RightArrowIcon } from '@/assets/OtherIcons';
import { PromptModeIcon } from '@/assets/SideBarIcons';
import { RANDOM_PROMPTS } from '@/constants/EnvogueaiConstants';
import { useEffect, useState } from 'react';
import RandomPromptWithTooltip from '../molecules/RandomPromptWithTooltip';

type promptSectionProps = {
  toggleMenu: () => void;
  selectedPrompt: string | null;
  removedPrompt: string | null;
  autoPrompt: string | undefined;
  setIsTyping: (setIstyping: boolean) => void;
  setUserPrompt: (setUserPrompt: string) => void;
};

const PromptSection = ({ toggleMenu, selectedPrompt, removedPrompt, autoPrompt, setIsTyping, setUserPrompt }: promptSectionProps) => {
  const [promptOpen, setPromptOpen] = useState(false);
  const [promptValue, setPromptValue] = useState('');

  const adjustTextareaHeight = (textarea: HTMLTextAreaElement | null) => {
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    const textarea = document.getElementById('prompt-textarea') as HTMLTextAreaElement | null;
    adjustTextareaHeight(textarea);
  }, [promptValue]);

  useEffect(() => {
    if (autoPrompt) {
      setPromptValue(autoPrompt);
      setPromptOpen(true);
    }
  }, [autoPrompt]);

  const handlePromptSelection = (selectedPrompt: string) => {
    setPromptValue(prevValue => prevValue ? `${prevValue} ${selectedPrompt}` : selectedPrompt);
    setPromptOpen(true);
  };

  useEffect(() => {
    if (selectedPrompt) {
      handlePromptSelection(selectedPrompt);
    }
  }, [selectedPrompt]);

  useEffect(() => {
    if (removedPrompt && promptValue.includes(removedPrompt)) {
      setPromptValue((prevValue) => {
        const updatedPrompts = prevValue
          .split(', ')
          .filter(prompt => prompt !== removedPrompt)
          .join(', ');
        return updatedPrompts;
      });
    }
  }, [removedPrompt, promptValue]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPromptValue(e.target.value);
    setUserPrompt(e.target.value);
    setIsTyping(true);
    adjustTextareaHeight(e.target);
  };

  const generateRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * RANDOM_PROMPTS.length);
    const currentPrompt = RANDOM_PROMPTS[randomIndex] || '';
    setPromptValue(currentPrompt);
    setPromptOpen(true);
  };

  return (
    <div className="flex flex-col justify-center bg-card border-[1px] px-[0.75rem] py-[0.5rem]
    card-border rounded-[1rem] h-full"
    >
      <div className="flex justify-between w-full">
        <div className="flex gap-2">
          <button type="button" onClick={() => setPromptOpen(prev => !prev)}>
            {promptOpen ? <DownArrowIcon className="color-icon" /> : <RightArrowIcon className="color-icon" /> }
          </button>
          <div className="text-satoshi text-primary text-[1rem] font-bold">Prompt</div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button onClick={generateRandomPrompt} type="button">
            <RandomPromptWithTooltip
              heading="Random Prompt"
              description="Generate random ideas. Spark your creativity with AI suggestions."
              icon={<RandomPromptIcon className="color-icon-secondary" />}
            />
          </button>
          <button type="button" className="cursor-pointer" onClick={toggleMenu}>
            <PromptModeIcon className="color-icon w-[1.188rem] h-[1.188rem]" />
          </button>
        </div>
      </div>
      <div>
        {promptOpen
        && (
          <textarea
            id="prompt-textarea"
            value={promptValue}
            onChange={handleInput}
            className="bg-transparent border-none text-secondary font-satoshi text-[0.75rem]
            leading-[1rem] w-full overflow-y-auto resize-none outline-none font-bold p-2"
            rows={1}
          />
        )}
      </div>
    </div>
  );
};

export default PromptSection;
