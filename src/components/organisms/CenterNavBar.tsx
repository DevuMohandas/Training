'use client';
import { NavbarOptions } from '@/constants/EnvogueaiConstants';
import React, { useState } from 'react';
import CenterNavBarOption from '../molecules/CenterNavBarOption';

const CenterNavBar = () => {
  const [activeRoute, setActiveRoute] = useState<string | undefined>('/home');

  return (
    <div className="relative flex items-center bg-[linear-gradient(33.04deg,#06090E_40.12%,#0C111A_80%)]
    border-2 border-[#10151F] rounded-radius-7xl max-h-[5.75rem] shadow-[0px_0px_28px_4px_#282B48C2,0px_0px_5.8px_0px_#00000040_inset] "
    >
      {NavbarOptions.map(option => (
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
// md:overflow-x-auto md:overflow-scroll sm:w-[80vw]
