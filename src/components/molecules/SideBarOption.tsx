import Image from 'next/image';
import React from 'react';

type SideBarOptionProps = {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
  customClassName?: string;
};

const SideBarOption: React.FC<SideBarOptionProps> = ({ icon, text, isActive, onClick, customClassName }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={text}
      className={`flex flex-col justify-center items-center w-[4.56rem] h-[6.490rem] gap-space-03 cursor-pointer 
        ${isActive ? 'bg-[url("/assets/images/Frame_7808.svg")]' : ''}`}
    >
      <div className="flex justify-center">
        {typeof icon === 'string' ? <Image src={icon} alt="icon" width={0} height={0} /> : icon}
      </div>
      <div className={`w-[3.625rem] text-base font-system-bold leading-relaxed font-satoshi text-center ${customClassName || 'text-primary'}`}>
        {text}
      </div>
    </button>
  );
};

export default SideBarOption;
