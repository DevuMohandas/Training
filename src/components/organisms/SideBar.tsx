'use client';
import { CategoryModeIcon, LiteModeIcon, MagicModeIcon, PromptModeIcon, TemplateModeIcon } from '@/assets/SideBarIcons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Avatar from '../molecules/Avatar';
import SideBarOption from '../molecules/SideBarOption';

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const router = useRouter();

  const options = [
    { icon: <LiteModeIcon className="color-icon" />, text: 'Lite Mode' },
    { icon: <MagicModeIcon />, text: 'Magic Mode', customClassName: 'text-gradient' },
    { icon: <PromptModeIcon className="color-icon" />, text: 'Prompt Mode' },
    { icon: <TemplateModeIcon className="color-icon" />, text: 'Template Mode' },
    { icon: <CategoryModeIcon className="color-icon" />, text: 'Cateogy' },
  ];

  const handleClick = (option: string) => {
    setActiveIndex(option);
    if (option === 'Lite Mode') {
      router.push('/envogue_litemode');
    } else if (option === 'Prompt Mode') {
      router.push('/envogue_promptmode');
    } else if (option === 'Magic Mode') {
      router.push('/envogue_magicmode');
    } else if (option === 'Template Mode') {
      router.push('/envogue_templatemode');
    }
  };

  return (
    <div className="flex flex-col w-[4.56rem] pt-space-06 relative
    bg-special border-1 border-[#1C212A] h-full"
    >
      <div className="flex flex-col gap-2 new-md:gap-space0 new-lg:gap-space-03 new-xl:gap-space-04">
        {options.map(option => (
          <SideBarOption
            key={option.text}
            icon={option.icon}
            text={option.text}
            isActive={activeIndex === option.text}
            onClick={() => handleClick(option.text)}
            customClassName={option.customClassName}
          />
        ))}
      </div>
      <div className="absolute bottom-space-06 left-space-03 flex justify-center">
        <div className="w-[2.875rem] h-[2.875rem]"><Avatar image="/assets/images/Elsa_DP.png" /></div>
      </div>
    </div>
  );
};

export default SideBar;
