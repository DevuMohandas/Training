import Image from 'next/image';
import React from 'react';

type GradientBorderButtonProps = {
  text: string;
  icon?: string;
  onClick?: () => void;
};

const GradientBorderButton: React.FC<GradientBorderButtonProps> = ({ text, onClick, icon }) => {
  return (
    <button type="button" onClick={onClick} className="bg-gradient-main p-[1px] rounded-[6px] h-[2.5rem] w-[100%]">
      <div className="bg-card w-[100%] h-[100%] text-primary text-[14px] font-bold rounded-[6px] flex justify-center items-center gap-1 px-2">
        {icon && <Image alt="icon" src={icon} width={12} height={12} />}
        {text}
      </div>
    </button>
  );
};

export default GradientBorderButton;
