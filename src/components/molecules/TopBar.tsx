import { ThemeModeIcon } from '@/assets/TopBarIcons';
import Image from 'next/image';
import { ICONS } from '../../constants/EnvogueaiConstants';
import CustomButton from '../atoms/CustomButton';

const TopBar = () => {
  return (
    <div className="flex justify-between w-full h-[4.563rem] bg-gradient-to-br from-[#06090E] to-[#0C111A] border-1 border-[#1C212A]">
      <div>
        <Image
          alt="envogue-logo"
          src={ICONS.ENVOGUE_LOGO}
          width={25}
          height={32}
          className="ml-[1.188rem] mt-[1.188rem] object-contain"
        />
      </div>
      <div className="flex justify-center items-center gap-[1.25rem] mr-[1.188rem]">
        <Image
          alt="notification"
          src="/assets/icons/notification_icon.svg"
          width={27}
          height={27}
          className="object-contain"
        />
        <div className="flex justify-center items-center w-[2rem] h-[1.875rem] rounded-[0.625rem] bg-[#10151F]">
          <ThemeModeIcon className="color-icon" />
        </div>
        <div><CustomButton variant="primary" text="Upgrade" icon={ICONS.UPGRADE_LOGO} /></div>
      </div>
    </div>
  );
};

export default TopBar;
