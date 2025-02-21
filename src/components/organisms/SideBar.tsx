'use client';
import { CategoryModeIcon, LiteModeIcon, MagicModeIcon, PromptModeIcon, TemplateModeIcon } from '@/assets/SideBarIcons';
import { useState } from 'react';
import Avatar from '../atoms/Avatar';
import SideBarOption from '../molecules/SideBarOption';

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const options = [
    { icon: <LiteModeIcon className="w-[1.741rem] h-[1.740rem] color-icon" />, text: 'Lite Mode' },
    { icon: <MagicModeIcon />, text: 'Magic Mode' },
    { icon: <PromptModeIcon className="color-icon w-[2.312rem] h-[2.312rem]" />, text: 'Prompt Mode' },
    { icon: <TemplateModeIcon className="color-icon" />, text: 'Template Mode' },
    { icon: <CategoryModeIcon className="color-icon" />, text: 'Category Mode' },
  ];

  return (
    <div className="flex flex-col w-[4.56rem] h-[100%] pt-[20px] pb-[20px]
    bg-special border-1 border-[#1C212A]"
    >
      <div className="flex flex-col gap-8">
        {options.map(option => (
          <SideBarOption
            key={option.text}
            icon={option.icon}
            text={option.text}
            isActive={activeIndex === option.text}
            onClick={() => setActiveIndex(option.text)}
          />
        ))}
      </div>
      <div className="flex justify-center mt-[18.56rem]">
        {/* <Avatar name="Devu Mohandas" /> */}
        <Avatar image="/assets/images/Elsa_DP.png" />
      </div>
    </div>
  );
};

export default SideBar;
