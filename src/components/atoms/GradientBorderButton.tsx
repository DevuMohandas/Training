import Image from 'next/image';
import React from 'react';

type GradientBorderButtonProps = {
  text: string;
  icon?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

const GradientBorderButton = ({ text, onClick, icon, variant }: GradientBorderButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-gradient-main p-[1px] h-[2.5rem] w-full cursor-pointer relative
         ${variant === 'secondary' ? 'rounded-[1rem] h-[3.25rem]' : 'rounded-[6px]'}`}
    >
      <div
        className={`w-full h-full text-primary text-[0.75rem] md:text-[0.875rem] 
          font-bold flex justify-center items-center gap-1 px-2
          ${variant === 'secondary' ? 'ternary-btn-color rounded-[1rem]' : 'bg-card rounded-[6px]'}`}
      >
        {icon && <Image alt="icon" src={icon} width={12} height={12} />}
        {text}
      </div>
    </button>
  );
};

export default GradientBorderButton;
