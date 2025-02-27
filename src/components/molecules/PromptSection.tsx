'use client';
import { DownArrowIcon, RandomPromptIcon, RightArrowIcon } from '@/assets/OtherIcons';
import { PromptModeIcon } from '@/assets/SideBarIcons';
import { useState } from 'react';
import PromptMenu from './PromptMenu';
import RandomPromptWithTooltip from './RandomPromptWithTooltip';

const PromptSection = () => {
  const [promptOpen, setPromptOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="flex flex-col bg-card border-[1px] px-[0.75rem] py-[0.5rem]
    card-border rounded-[1rem] max-w-[19.56rem]"
    >
      <div className="flex justify-between w-full">
        <div className="flex gap-2">
          <button type="button" onClick={() => setPromptOpen(prev => !prev)}>
            {promptOpen ? <DownArrowIcon className="color-icon" /> : <RightArrowIcon className="color-icon" /> }
          </button>
          <div className="text-satoshi text-primary text-[1rem] font-bold">Prompt</div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div>
            <RandomPromptWithTooltip
              heading="Random Prompt"
              description="Generate random ideas. Spark your creativity with AI suggestions."
              icon={<RandomPromptIcon className="color-icon-secondary" />}
            />
          </div>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer">
            <PromptModeIcon className="color-icon w-[1.188rem] h-[1.188rem]" />
          </button>

          {menuOpen && (
            <div className="absolute right-1 mt-2 w-full z-50">
              <PromptMenu />
            </div>
          )}

        </div>
      </div>
      <div>
        {promptOpen
        && (
          <textarea
            value={inputValue}
            onChange={handleInput}
            className="bg-transparent border-none text-secondary font-satoshi text-[0.75rem]
            leading-[1rem] w-full overflow-hidden resize-none outline-none font-bold p-2"
            rows={1}
          />
        )}
      </div>
    </div>
  );
};

export default PromptSection;
