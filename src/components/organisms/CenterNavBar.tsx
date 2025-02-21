'use client';
import React, { useState } from 'react';
import CenterNavBarOption from '../molecules/CenterNavBarOption';

const CenterNavBar = () => {
  const [activeRoute, setActiveRoute] = useState<string | undefined>(undefined);
  const optionsList = [
    { icon: '/assets/icons/community_icon.svg', text: 'Community', route: '/' },
    { icon: '/assets/icons/favorite_icon.svg', text: 'Favorites', route: '/b' },
    { icon: '/assets/icons/upscale_icon.svg', text: 'Upscale', route: '/c' },
    { icon: '/assets/icons/home_icon.svg', text: 'Home', route: '/home' },
    { icon: '/assets/icons/plan_icon.svg', text: 'Plans and Billing', route: '/envogue_dashboard' },
    { icon: '/assets/icons/tutorial_icon.svg', text: 'Tutorial', route: '/e' },
    { icon: '/assets/icons/gallery_icon.svg', text: 'Gallery', route: '/f' },
  ];

  return (
    <div className="flex justify-center items-center bg-gradient-to-t from-[#06090E] to-[#0C111A]
    overflow-x-auto overflow-hidden w-[75vw] sm:[80vw] rounded-[53px] border-1 max-w-[53.5rem]
    border-[#1C212A] shadow-[0px_0px_28px_4px_#282B48C2,0px_0px_5.8px_0px_#00000040_inset]"
    >
      {optionsList.map(option => (
        <div
          key={option.text}
          className={`flex justify-center items-center h-[5.75rem] ${activeRoute === option.route && 'bg-[#22417d] h-[6.75rem] w-[6.75rem] rounded-full'}
          min-w-[7rem] sm:w-[7.5rem] border-1 border-[#1C212A]`}
        >
          <CenterNavBarOption
            icon={option.icon}
            route={option.route}
            text={option.text}
            isSelected={activeRoute === option.route}
            onClick={() => {
              setActiveRoute(option.route);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CenterNavBar;
