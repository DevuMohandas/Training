import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type CenterNavBarOptionProps = {
  icon?: React.ReactNode | string;
  text: string;
  route: string;
  isSelected: boolean;
  onClick: () => void;
};

const CenterNavBarOption: React.FC<CenterNavBarOptionProps> = ({ icon, text, route, isSelected, onClick }) => {
  return (
    <div className={`flex transition-all duration-200 ease-in-out 
      ${isSelected
      ? 'w-[8.31rem] h-[8.31rem] rounded-full bg-gradient-to-r from-[#61A6F2] via-[#C9649A] via-[#FF5A5E] to-[#F28E4C] -mt-5'
      : 'justify-center items-center w-[7.5rem] h-[5.75rem] border-r-1 border-[#1C212A] md:p-1'}
    `}
    >
      <Link href={route} onClick={onClick}>
        <div className={`flex flex-col justify-center items-center pl-0.5 pr-0.5
          ${isSelected && 'w-[8.15rem] h-[8.15rem] rounded-full bg-[#040508]'}`}
        >
          <div className="w-[7vw] flex justify-center md:w-fit">
            <Image
              alt="Icon"
              src={icon}
              width={35}
              height={28}
            />
          </div>
          <div className="font-satoshi font-[500] text-[1.5vw] text-center md:text-[0.875rem] text-[#ffffff]">{text}</div>
        </div>
      </Link>
    </div>
  );
};

export default CenterNavBarOption;
