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
      <div className={`flex justify-center items-center border-r-2 border-[#10151F] cursor-pointer
        ${isSelected
      ? 'h-[7rem] w-[7rem] md:h-[8rem] md:w-[8rem] rounded-full p-space-0 bg-gradient-to-r from-[#F28E4C] via-[#FF5A5E] via-[#C9649A] to-[#61A6F2]'
      : 'w-[4.5rem] md:w-[5.5rem] lg:w-[7.5rem] border border-white'}`}
      >
        <div className={`flex flex-col justify-center ${isSelected && 'w-full h-full bg-[#040508] rounded-full'}`}>
          <div className="flex justify-center"><Image alt="option-icon" src={icon} width={36} height={36} /></div>
          <div className="text-[#ffffff] text-xs new-md:text-sm new-lg:text-base font-satoshi font-system-bold text-center">
            {text}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CenterNavBarOption;

// {/* <div className={`flex justify-center items-center border-r-2 border-[#10151F] cursor-pointer
//   ${isSelected
// ? 'h-[7rem] w-[7rem] md:h-[8rem] md:w-[8rem] rounded-full p-space-0 bg-gradient-to-r from-[#F28E4C] via-[#FF5A5E] via-[#C9649A] to-[#61A6F2]'
// : 'w-[4.5rem] md:w-[5.5rem] lg:w-[7.5rem] border border-white'}`}
// > */}