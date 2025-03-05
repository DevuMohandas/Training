import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type CenterNavBarOptionProps = {
  icon?: string;
  text: string;
  route: string;
  isSelected: boolean;
  onClick: () => void;
};

const CenterNavBarOption: React.FC<CenterNavBarOptionProps> = ({ icon, text, route, isSelected, onClick }) => {
  return (
    <Link href={route} onClick={onClick}>
      <div className={`flex justify-center items-center w-[7.5rem] border-r-1 border-[#10151F] cursor-pointer
        ${isSelected ? 'h-[8.3125rem] w-[8.3125rem] rounded-full p-0.5 bg-gradient-to-r from-[#F28E4C] via-[#FF5A5E] via-[#C9649A] to-[#61A6F2]' : 'none'}`}
      >
        <div className={`flex flex-col justify-center ${isSelected && 'w-[100%] h-[100%] bg-[#040508] rounded-full'}`}>
          <div className="flex justify-center"><Image alt="option-icon" src={icon} width={36} height={36} /></div>
          <div className="text-[#ffffff] font-satoshi font-bold text-center">
            {text}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CenterNavBarOption;

// text-[0.875rem]
