import React from 'react';

type SideBarOptionProps = {
  icon: string | React.ReactNode;
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
      className={`flex flex-col justify-center items-center w-[4.56rem] h-[6.490rem] gap-3 cursor-pointer 
        ${isActive ? 'bg-[url("/assets/images/Frame_7808.svg")]' : 'none'}`}
    >
      <div className="flex justify-center">{icon}</div>
      <div className={`w-[3.625rem] text-[0.875rem] font-bold leading-[1.375rem] font-satoshi text-center ${customClassName || 'text-primary'}`}>
        {text}
      </div>
    </button>
  );
};

export default SideBarOption;
