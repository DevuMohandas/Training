import React from 'react';

type PromptCardOptionProps = {
  option: string;
};

const PromptCardOption: React.FC<PromptCardOptionProps> = ({ option }) => {
  return (
    <button
      type="button"
      className="flex justify-center items-center text-[#FFFFFF] font-satoshi mb-[0.40rem]
      text-[0.5rem] border border-[#1C212A] rounded-[0.25rem] max-w-[7.375rem] h-[1.25rem]"
    >
      {option}
    </button>
  );
};

export default PromptCardOption;
