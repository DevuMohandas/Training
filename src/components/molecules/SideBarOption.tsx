'use client';
import Image from 'next/image';
// import React, { useState } from 'react';

interface SideBarOptionProps {
  icon: string; // Icon image path
  label: string; // Text label
  isSelected: boolean; // Whether the option is selected
  onClick: () => void; // Click handler
};

const SideBarOption: React.FC<SideBarOptionProps> = ({ icon, label, isSelected, onClick }) => { // means that SideBarOption is a functional component that expects SideBarOptionProps as its props.
  return (
    <div className="flex w-[19rem] h-[3.04rem]">
      <button type="button" className={`flex justify-start w-full gap-[22.1px] cursor-pointer ${isSelected && 'shadow-lg rounded-[10px]'}`} onClick={onClick}>
        <Image
          src={icon}
          alt="home"
          width={38}
          height={38}
          className="ml-[2.5rem] cursor-pointer object-contain"
        />
        <span className={`mt-[0.5rem] text-[20px] ${isSelected ? 'font-[700] text-[#F78A79]' : 'font-[500] text-[#394A59]/80'}`}>
          {label}
        </span>
      </button>
      {isSelected && <div className="h-[3.04rem] w-[0.4rem] bg-[#F78A79] rounded-[4px]"></div>}
    </div>
  );
};

export default SideBarOption;
