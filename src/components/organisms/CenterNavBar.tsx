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
    <div className="px-4 md:px-10 bg-blue-950">
      <div className=" md:max-w-[600px] sm:max-w-full mx-auto h-[92px] md:h-[80px] sm:h-[72px] flex items-center">
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide w-full">
          <div className="p-3 bg-gray-200 rounded snap-center">Home</div>
          <div className="p-3 bg-gray-200 rounded snap-center">About</div>
          <div className="p-3 bg-gray-200 rounded snap-center">Services</div>
          <div className="p-3 bg-gray-200 rounded snap-center">Contact</div>
          <div className="p-3 bg-gray-200 rounded snap-center">Portfolio</div>
          <div className="p-3 bg-gray-200 rounded snap-center">Blog</div>
        </div>
      </div>
    </div>
  );
};

export default CenterNavBar;

// <div className="w-full px-4 md:px-10 bg-blue-950">
//   <div className="w-full max-w-[850px] md:max-w-[600px] sm:max-w-full mx-auto h-[92px] md:h-[80px] sm:h-[72px] flex items-center">
//     <div className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full">
//       <div className="p-3 bg-gray-200 rounded snap-center">Home</div>
//       <div className="p-3 bg-gray-200 rounded snap-center">About</div>
//       <div className="p-3 bg-gray-200 rounded snap-center">Services</div>
//       <div className="p-3 bg-gray-200 rounded snap-center">Contact</div>
//       <div className="p-3 bg-gray-200 rounded snap-center">Portfolio</div>
//       <div className="p-3 bg-gray-200 rounded snap-center">Blog</div>
//       <div className="p-3 bg-gray-200 rounded snap-center">Services</div>
//       <div className="p-3 bg-gray-200 rounded snap-center">Contact</div>
//       <div className="p-3 bg-gray-200 rounded snap-center">Portfolio</div>
//       <div className="p-3 bg-gray-200 rounded snap-center">Blog</div>
//       <div className="p-3 bg-gray-200 rounded snap-center">More</div>
//     </div>
//   </div>
// </div>

// ================================================================================================

// {optionsList.map((option, index) => (
//   <CenterNavBarOption
//     key={index}
//     icon={option.icon}
//     text={option.text}
//     route={option.route}
//     onClick={() => {
//       setActiveRoute(option.route);
//     }}
//     isSelected={activeRoute === option.route}
//   />
// ))}

// return (
//   <div className="border-[1px] border-[#1C212A] flex justify-center overflow-hidden
//   h-fit sm:h-[5.75rem] w-full lg:w-fit rounded-[53px] bg-gradient-to-br from-[#06090E] to-[#0C111A]
//   shadow-[0px_0px_28px_4px_#282B48C2,0px_0px_5.8px_0px_#00000040_inset]"
//   >
//   </div>
// )

// {optionsList.map(option => (
//   <CenterNavBarOption
//     key={option.text}
//     icon={option.icon}
//     text={option.text}
//     route={option.route}
//     onClick={() => {
//       setActiveRoute(option.route);
//     }}
//     isSelected={activeRoute === option.route}
//   />
// ))}
// =======================================================================
