'use client';
import React, { useState } from 'react';
import CenterNavBarOption from '../molecules/CenterNavBarOption';

const CenterNavBar = () => {
  const [activeRoute, setActiveRoute] = useState<string | undefined>('/home');

  const optionsList = [
    { icon: '/assets/icons/community_icon.svg', text: 'Community', route: '/' },
    { icon: '/assets/icons/favorite_icon.svg', text: 'Favourite', route: '/b' },
    { icon: '/assets/icons/upscale_icon.svg', text: 'Upscale', route: '/c' },
    { icon: '/assets/icons/home_icon.svg', text: 'Home', route: '/home' },
    { icon: '/assets/icons/plan_icon.svg', text: 'Plans & Billing', route: '/envogue_dashboard' },
    { icon: '/assets/icons/tutorial_icon.svg', text: 'Tutorial', route: '/e' },
    { icon: '/assets/icons/gallery_icon.svg', text: 'Gallery', route: '/f' },
  ];

  return (
    <div className="flex items-center max-h-[5.75rem] bg-[linear-gradient(33.04deg,#06090E_40.12%,#0C111A_80%)]
    border-2 border-[#10151F] rounded-[53px] w-[70vw] sm:w-[80vw] md:w-[85vw] lg:w-fit overflow-x-auto overflow-y-hidden
    shadow-[0px_0px_28px_4px_#282B48C2,0px_0px_5.8px_0px_#00000040_inset] scrollbar-hide "
    >
      {optionsList.map(option => (
        <CenterNavBarOption
          key={option.text}
          icon={option.icon}
          text={option.text}
          route={option.route}
          isSelected={activeRoute === option.route}
          onClick={() => setActiveRoute(option.route)}
        />
      ))}
    </div>
  );
};

export default CenterNavBar;

// max-h-[5.75rem]
