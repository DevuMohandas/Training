'use client';
import Image from 'next/image';
import { useState } from 'react';
import SideBarOption from '../molecules/SideBarOption';
import UserProfile from '../molecules/UserProfile';

const SideBar = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const options = [
    { icon: '/assets/images/home-Regular.png', label: 'Inicio' },
    { icon: '/assets/images/inbox-Regular.png', label: 'Bodega virtual' },
    { icon: '/assets/images/star-Regular.png', label: 'Suscripción' },
    { icon: '/assets/images/settings-Regular.png', label: 'Ajustes' },
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="grow w-[20.28rem] shadow-[0_0_25px_5px_rgba(0,0,0,0.2)] m-10 rounded-[19px]">
        <Image
          src="/assets/images/Vineo_logo.png"
          alt="vineo-logo"
          width={182}
          height={54.048}
          className="ml-[71.05px] pt-[48px]"
        />
        <div className="flex flex-col mt-[2.81rem] gap-[1.31rem]">
          {options.map(option => (
            <SideBarOption
              key={option.label}
              icon={option.icon}
              label={option.label}
              isSelected={selectedOption === option.label}
              onClick={() => setSelectedOption(option.label)}
            />
          ))}
          <div className="mt-[10.40rem]">
            <SideBarOption
              key="Cerrar sesión"
              icon="/assets/images/vector-Regular.png"
              label="Cerrar sesión"
              isSelected={selectedOption === 'Cerrar sesión'}
              onClick={() => {
                setSelectedOption('Cerrar sesión');
              }}
            />
          </div>
          <div className="mt-[14.12rem] ml-[35px]">
            <UserProfile name="Carlos Bernabeu" coins={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
