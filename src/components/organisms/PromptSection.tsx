'use client';
import { DownArrowIcon, RandomPromptIcon, RightArrowIcon } from '@/assets/OtherIcons';
import { PromptModeIcon } from '@/assets/SideBarIcons';
import { RANDOM_PROMPTS } from '@/constants/EnvogueaiConstants';
import { useEffect, useState } from 'react';
import RandomPromptWithTooltip from '../molecules/RandomPromptWithTooltip';

type promptSectionProps = {
  toggleMenu: () => void;
  selectedPrompts: string[];
  autoPrompt?: string | undefined;
  setIsTyping?: (setIstyping: boolean) => void;
  setUserPrompt?: (setUserPrompt: string) => void;
  newDesign?: boolean;
  displayPrompt: string;
};

const PromptSection = ({ toggleMenu, autoPrompt, setIsTyping, setUserPrompt, selectedPrompts, displayPrompt }: promptSectionProps) => {
  const [promptOpen, setPromptOpen] = useState(false);
  const [promptValue, setPromptValue] = useState<string | string[]>('');
  const [userTyping, setUserTyping] = useState(false);

  useEffect(() => {
    if ((selectedPrompts || []).length > 0) {
      console.warn(selectedPrompts);
      setPromptOpen(true);
      setPromptValue(selectedPrompts);
    }
  }, [selectedPrompts]);

  useEffect(() => {
    if (displayPrompt) {
      setPromptValue(displayPrompt);
      setPromptOpen(true);
    }
  }, [displayPrompt]);

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
    if (autoPrompt && (userTyping === false)) {
      setPromptOpen(true);
      setPromptValue(autoPrompt);
    }
  }, [autoPrompt, userTyping]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsTyping?.(true);
    const inputValue = e.target.value;
    setPromptValue(inputValue);
    setUserPrompt?.(inputValue);
    adjustTextareaHeight(e.target);
    setUserTyping(true);
  };

  const generateRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * RANDOM_PROMPTS.length);
    const currentPrompt = RANDOM_PROMPTS[randomIndex] || '';
    setPromptValue(currentPrompt);
    setPromptOpen(true);
  };

  return (
    <div className="flex flex-col justify-center bg-card border-[1px] px-space-03 py-space-02
    card-border rounded-radius-xl h-full max-h-[11.1rem] "
    >
      <div className="flex justify-between w-full">
        <div className="flex gap-space-02">
          <button aria-label="arrow-button" type="button" onClick={() => setPromptOpen(prev => !prev)}>
            {promptOpen ? <DownArrowIcon className="color-icon" /> : <RightArrowIcon className="color-icon" /> }
          </button>
          <div className="text-primary text-md font-system-bold">Prompt</div>
        </div>
        <div className="flex justify-center items-center gap-space-04">
          <button aria-label="random-prompt-button" onClick={generateRandomPrompt} type="button">
            <RandomPromptWithTooltip
              heading="Random Prompt"
              description="Generate random ideas. Spark your creativity with AI suggestions."
              icon={<RandomPromptIcon className="color-icon-secondary" />}
            />
          </button>
          <button aria-label="prompt-menu-button" type="button" className="cursor-pointer" onClick={toggleMenu}>
            <PromptModeIcon className="color-icon w-[1.188rem] h-[1.188rem]" />
          </button>
        </div>
      </div>
      <div className="overflow-auto custom-scrollbar">
        {promptOpen
        && (
          <textarea
            id="prompt-textarea"
            value={promptValue}
            onChange={handleInput}
            className="bg-transparent border-none text-secondary text-sm
            leading-normal w-full resize-none outline-none font-system-bold p-space-02 overflow-auto"
            rows={1}
          />
        )}
      </div>
    </div>
  );
};

export default PromptSection;
