'use client';
import CategoryModeIcon from '@/assets/icons/category_mode.svg';
import LiteModeIcon from '@/assets/icons/lite_mode.svg';
import MagicModeIcon from '@/assets/icons/magic_mode.svg';
import PromptModeIcon from '@/assets/icons/prompt_mode.svg';
import TemplateModeIcon from '@/assets/icons/template_mode.svg';
import { useState } from 'react';
import Avatar from '../atoms/Avatar';
import SideBarOption from '../molecules/SideBarOption';

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const options = [
    { icon: <LiteModeIcon />, text: 'Lite Mode' },
    { icon: <MagicModeIcon />, text: 'Magic Mode' },
    { icon: <PromptModeIcon />, text: 'Prompt Mode' },
    { icon: <TemplateModeIcon />, text: 'Template Mode' },
    { icon: <CategoryModeIcon />, text: 'Category Mode' },
  ];

  return (
    <div className="flex flex-col w-[4.56rem] h-[100%] pt-[20px] pb-[20px]
    bg-gradient-to-br from-[#06090E] to-[#0C111A] border-1 border-[#1C212A]"
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
