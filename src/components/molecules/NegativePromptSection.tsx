'use client';
import { DownArrowIcon, RightArrowIcon } from '@/assets/OtherIcons';
import { useState } from 'react';

const NegativePromptSection = () => {
  const [promptOpen, setPromptOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="flex flex-col bg-card border-[1px] py-[0.5rem] pl-[0.75rem]
      border-[#1C212A] rounded-[1rem] max-w-[19.56rem]"
    >
      <div className="flex gap-2">
        <button type="button" onClick={() => setPromptOpen(!promptOpen)}>
          {promptOpen ? <DownArrowIcon className="color-icon" /> : <RightArrowIcon className="color-icon" /> }
        </button>
        <div className="text-satoshi text-primary text-[1rem] font-bold">Negative Prompt</div>
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

export default NegativePromptSection;
