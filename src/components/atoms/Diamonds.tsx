import Image from 'next/image';
import React from 'react';

type DiamondProps = {
  diamonds: number;
};

const Diamonds: React.FC<DiamondProps> = ({ diamonds }) => {
  return (
    <div className="flex justify-center items-center w-[3.125rem] h-[2rem] bg-[#10151F] rounded-[11px] gap-[3px]">
      <div className="font-satoshi font-bold text-[#ffffff] text-[0.875rem]">{diamonds}</div>
      <div className="pt-1"><Image alt="diamonds" src="assets/icons/diamonds.svg" width={15.91} height={13.01} /></div>
    </div>
  );
};

export default Diamonds;
