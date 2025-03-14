import Image from 'next/image';
import React from 'react';

type IconButtonProps = {
  onClick: () => void;
  icon: string;
  width: number;
  height: number;
  alt: string;
};

const IconButton = ({ onClick, icon, width, height }: IconButtonProps) => {
  return (
    <button type="button" onClick={onClick} className="p-1 cursor-pointer bg-white/10 w-[2.401rem] h-[2.401rem] flex justify-center">
      <Image alt="icon" src={icon} width={width} height={height} />
    </button>
  );
};

export default IconButton;
