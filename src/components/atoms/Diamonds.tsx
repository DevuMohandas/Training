import { DiamondIcons } from '@/assets/TopBarIcons';
import React from 'react';

type DiamondProps = {
  diamonds: number;
};

const Diamonds = ({ diamonds }: DiamondProps) => {
  return (
    <div className="flex justify-center items-center w-[3.125rem] h-[2rem] bg-card rounded-[11px] gap-[3px]">
      <span className="font-satoshi font-bold text-primary text-[0.875rem]">{diamonds}</span>
      <div className="pt-1">
        <DiamondIcons className="color-icon" />
      </div>
    </div>
  );
};

export default Diamonds;
