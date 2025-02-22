import React from 'react';

type SideBarOptionProps = {
  icon: string | React.ReactNode;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
};

const SideBarOption: React.FC<SideBarOptionProps> = ({ icon, text, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col justify-center items-center w-[4.56rem] h-[6.490rem] gap-3 cursor-pointer 
        ${isActive ? 'bg-[url("/assets/images/Frame_7808.svg")] border-2 border-[bg-gradient-to-r from-[#F28E4C] via-[#FF5A5E] via-[#C9649A] to-[#61A6F2]]' : 'none'}`}
    >
      <div className="flex justify-center">
        {icon}
      </div>
      <div className="w-[3.625rem] text-[0.875rem] text-primary font-bold leading-[1.375rem] font-satoshi text-center">{text}</div>
    </button>
  );
};

export default SideBarOption;
