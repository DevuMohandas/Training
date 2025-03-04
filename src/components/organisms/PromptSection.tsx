'use client';
import { DownArrowIcon, RandomPromptIcon, RightArrowIcon } from '@/assets/OtherIcons';
import { PromptModeIcon } from '@/assets/SideBarIcons';
import { useState } from 'react';
import RandomPromptWithTooltip from '../molecules/RandomPromptWithTooltip';

type promptSectionProps = {
  toggleMenu: () => void;
  selectedPrompt: string | null;
};

const PromptSection: React.FC<promptSectionProps> = ({ toggleMenu, selectedPrompt }) => {
  const [promptOpen, setPromptOpen] = useState(false);
  const [promptValue, setPromptValue] = useState('');

  const randomPrompts = [
    'RandomPrompt1',
    'RandomPrompt2',
    'RandomPrompt3',
    'RandomPrompt4',
    'RandomPrompt5',
  ];

  const handlePromptSelection = (selectedPrompt: string) => {
    setPromptValue(prevValue => prevValue ? `${prevValue}, ${selectedPrompt}` : selectedPrompt);
    setPromptOpen(true);
  };

  if (selectedPrompt) {
    handlePromptSelection(selectedPrompt);
  }

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPromptValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const generateRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * randomPrompts.length);
    const currentPrompt = randomPrompts[randomIndex] || '';
    setPromptValue((prevValue) => {
      const parts = prevValue.split(', ');
      const filteredParts = parts.filter(prompt => !randomPrompts.includes(prompt)); // Remove old random prompt
      return filteredParts.length > 0 ? `${filteredParts.join(' ')}, ${currentPrompt}` : currentPrompt;
    });
    setPromptOpen(true);
  };

  return (
    <div className="flex flex-col bg-card border-[1px] px-[0.75rem] py-[0.5rem]
    card-border rounded-[1rem] max-w-[19.56rem]"
    >
      <div className="flex justify-between w-full">
        <div className="flex gap-2">
          <button type="button" className="cursor-pointer" onClick={() => setPromptOpen(prev => !prev)}>
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
