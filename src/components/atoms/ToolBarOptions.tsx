import type React from 'react';
import Image from 'next/image';
import { useState } from 'react';

type ToolBarOptionsProps = {
  icon: React.ReactNode;
  alt: string;
  width?: number;
  height?: number;
};
const ToolBarOptions = ({ icon, alt }: ToolBarOptionsProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button type="button" onClick={() => setIsActive(!isActive)} className={`h-[2.438rem] flex justify-center cursor-pointer ${isActive ? 'w-[4.563] ml-[-36px]' : 'w-[2.438rem]'}`}>
      {typeof icon === 'string'
        ? <Image alt={alt} src={icon} width={27} height={27} layout="responsive" />
        : icon}
    </button>
  );
};

export default ToolBarOptions;
