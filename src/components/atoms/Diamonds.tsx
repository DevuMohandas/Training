'use client';
import { DiamondIcons } from '@/assets/TopBarIcons';
import React, { useState } from 'react';
import DiamondsPopup from '../molecules/DiamondsPopup';

type DiamondProps = {
  diamonds: number;
};

const Diamonds = ({ diamonds }: DiamondProps) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative">
      <button type="button" onClick={() => setShowPopup(true)} className="flex justify-center items-center w-[3.125rem] h-[2rem] bg-card rounded-[11px] gap-[3px] cursor-pointer">
        <span className="font-satoshi font-bold text-primary text-sm">{diamonds}</span>
        <div className="pt-1">
          <DiamondIcons className="color-icon" />
        </div>
      </button>
      {showPopup && <div className="absolute right-4 z-1"><DiamondsPopup setVisibiliy={setShowPopup} /></div>}
    </div>
  );
};

export default Diamonds;
