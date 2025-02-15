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
    <div className="border-[1px] border-[#1C212A] flex justify-center overflow-hidden
    h-fit sm:h-[5.75rem] w-full lg:w-fit rounded-[53px] bg-gradient-to-br from-[#06090E] to-[#0C111A]
    shadow-[0px_0px_28px_4px_#282B48C2,0px_0px_5.8px_0px_#00000040_inset]"
    >
      {optionsList.map((option, index) => (
        <CenterNavBarOption
          key={index}
          icon={option.icon}
          text={option.text}
          route={option.route}
          onClick={() => {
            setActiveRoute(option.route);
          }}
          isSelected={activeRoute === option.route}
        />
      ))}
    </div>
  );
};

export default CenterNavBar;
