'use client';
import { DownArrowIcon, RandomPromptIcon, RightArrowIcon } from '@/assets/OtherIcons';
import { PromptModeIcon } from '@/assets/SideBarIcons';
// import Image from 'next/image';
import { useState } from 'react';

const PromptSection = () => {
  const [promptOpen, setPromptOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="flex flex-col bg-card border-[1px] px-[0.75rem] py-[0.5rem]
    border-[#1C212A] rounded-[16px] max-w-[19.56rem]"
    >
      <div className="flex justify-between w-full">
        <div className="flex gap-2">
          <button type="button" onClick={() => setPromptOpen(!promptOpen)}>
            {promptOpen ? <DownArrowIcon className="color-icon" /> : <RightArrowIcon className="color-icon" /> }
          </button>
          <div className="text-satoshi text-primary text-[1rem] font-bold">Prompt</div>
        </div>
        <div className="flex justify-center items-center gap-4">
          {/* <div><Image alt="v1" src="assets/icons/prompt-icon1.svg" width={19} height={19} /></div> */}
          <div><RandomPromptIcon className="color-icon" /></div>
          <div><PromptModeIcon className="color-icon w-[19px] h-[19px]" /></div>
        </div>
      </div>
      <div>
        {promptOpen
        && (
          <textarea
            value={inputValue}
            onChange={handleInput}
            className="bg-transparent border-none text-secondary font-satoshi text-[12px]
            leading-[16px] w-full overflow-hidden resize-none outline-none font-bold p-2"
            rows={1}
          />
        )}
      </div>
    </div>
  );
};

export default PromptSection;
