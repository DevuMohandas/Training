import Image from 'next/image';
// import React, { useState } from 'react';

type GradientBorderButtonProps = {
  text: string;
  icon?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

const GradientBorderButton = ({ text, onClick, icon, variant }: GradientBorderButtonProps) => {
  // const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    // setIsClicked(true);
    onClick?.();
    // setTimeout(() => setIsClicked(false), 300);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`bg-gradient-main p-space-0 h-[2.5rem] w-full cursor-pointer relative
         ${variant === 'secondary' ? 'rounded-radius-xl h-[3.25rem]' : 'rounded-radius-s'}`}
    >
      <div
        className={`w-full h-full text-primary text-sm new-md:text-sm 
          font-bold flex justify-center items-center gap-space-01 px-space-02 transition-colors duration-300
          ${variant === 'secondary'
      ? 'ternary-btn-color rounded-radius-xl'
      : 'bg-card rounded-radius-s'}
      `}
      >
        {icon && <Image alt="icon" src={icon} width={12} height={12} />}
        {text}
      </div>
    </button>
  );
};

export default GradientBorderButton;
