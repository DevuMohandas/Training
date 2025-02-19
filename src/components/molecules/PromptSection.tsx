'use client';
import Image from 'next/image';
import { useState } from 'react';

const PromptSection = () => {
  const [promptOpen, SetPromptOpen] = useState(false);

  return (
    <div className="flex justify-between bg-[#10151F] border-[1px] py-[0.5rem] px-[0.75rem]
    border-[#1C212A] rounded-[16px] max-w-[19.56rem]"
    >
      <div className="flex justify-center items-center gap-2">
        <button type="button" onClick={() => SetPromptOpen(!promptOpen)}>
          <Image alt="vector" src="assets/icons/Vector.svg" width={7.13} height={12.97} />
        </button>
        <div className="text-satoshi text-[#ffffff] text-[1rem] font-bold">Prompt</div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div><Image alt="v1" src="assets/icons/prompt-icon1.svg" width={19} height={19} /></div>
        <div><Image alt="v2" src="assets/icons/prompt-icon2.svg" width={19} height={19} /></div>
      </div>
    </div>
  );
};

export default PromptSection;
