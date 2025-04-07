import { PopupOptions } from '@/constants/EnvogueaiConstants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import PopupOption from '../atoms/PopupOption';
import Avatar from './Avatar';

const ProfilePopup = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const router = useRouter();

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);

    if (option === 'Settings') {
      router.push('/envogue_profilemode');
    }
  };

  return (
    <div className="bg-special border-[1px] card-border rounded-[10px] w-[12.75rem] h-[16.375rem] shadow-[0px_0px_10.3px_0px_#211A30] overflow-hidden">
      <div className="flex flex-col px-space-04 pt-space-06 pb-space-04">
        <div className="flex gap-[6px] border-b-[1px] card-border pb-space-04">
          <div className="w-[2.187rem] h-[2.187rem]"><Avatar name="Devu Mohandas" /></div>
          <div className="flex flex-col items-center">
            <p className="text-primary text-base font-system-bold">Devu Mohandas</p>
            <p className="text-primary text-sm font-system-regular">Personal</p>
          </div>
          <div className="flex flex-1 justify-end items-center"><Image src="/assets/icons/tick-icon.svg" width={16} height={16} alt="tick" /></div>
        </div>

        <div className="flex flex-col gap-space-04 pt-[21px]">
          {PopupOptions.map(option => (
            <PopupOption
              key={option.id}
              label={option.label}
              icon={option.icon}
              isSelected={selectedOption === option.label}
              onClick={() => handleOptionClick(option.label)}
            />
          ))}
        </div>
      </div>
      <div className="bg-card flex justify-center py-space-02 text-primary text-xs">dm2002@gmail.com</div>
    </div>
  );
};

export default ProfilePopup;
