'use client';
import { CategoryModeIcon, LiteModeIcon, MagicModeIcon, PromptModeIcon, TemplateModeIcon } from '@/assets/SideBarIcons';
import { useState } from 'react';
import Avatar from '../atoms/Avatar';
import SideBarOption from '../molecules/SideBarOption';

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const options = [
    { icon: <LiteModeIcon className="color-icon" />, text: 'Lite Mode' },
    { icon: <MagicModeIcon />, text: 'Magic Mode', customClassName: 'text-gradient' },
    { icon: <PromptModeIcon className="color-icon" />, text: 'Prompt Mode' },
    { icon: <TemplateModeIcon className="color-icon" />, text: 'Template Mode' },
    { icon: <CategoryModeIcon className="color-icon" />, text: 'Category Mode' },
  ];

  return (
    <div className="flex flex-col w-[4.56rem] pt-5 relative
    bg-special border-1 border-[#1C212A] h-full"
    >
      <div className="flex flex-col gap-2 md:gap-2.5 lg:gap-3.5 xl:gap-4">
        {options.map(option => (
          <SideBarOption
            key={option.text}
            icon={option.icon}
            text={option.text}
            isActive={activeIndex === option.text}
            onClick={() => setActiveIndex(option.text)}
            customClassName={option.customClassName}
          />
        ))}
      </div>
      <div className="absolute bottom-6 left-3 flex justify-center">
        <Avatar name="Devu Mohandas" />
        {/* <Avatar image="/assets/images/Elsa_DP.png" /> */}
      </div>
    </div>
  );
};

export default SideBar;
