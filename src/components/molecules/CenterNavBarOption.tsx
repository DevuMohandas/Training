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

const CenterNavBarOption: React.FC<CenterNavBarOptionProps> = ({ icon, text, route, onClick }) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Link href={route} onClick={onClick}>
          <Image
            alt="icon"
            src={icon}
            width={35}
            height={28}
          />
        </Link>
      </div>
      <div className="font-satoshi font-bold text-[0.75rem] text-[#ffffff] text-center">{text}</div>
    </div>
  );
};

export default CenterNavBarOption;
