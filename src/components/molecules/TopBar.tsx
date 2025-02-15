import Image from 'next/image';
import CustomButton from '../atoms/CustomButton';

const TopBar = () => {
  return (
    <div className="flex justify-between w-full h-[4.563rem] bg-gradient-to-br from-[#06090E] to-[#0C111A] border-1 border-[#1C212A]">
      <div>
        <Image
          alt="envogue-logo"
          src="/assets/icons/envogue_logo.svg"
          width={25}
          height={32}
          className="ml-[19px] mt-[19px] object-contain"
        />
      </div>
      <div className="flex justify-center items-center gap-[20px] mr-[19px]">
        <Image
          alt="notification"
          src="/assets/icons/notification_icon.svg"
          width={27}
          height={27}
          className="object-contain"
        />
        <div className="flex justify-center w-[2rem] h-[1.875rem] rounded-[10px] bg-[#10151F]">
          <Image
            alt="theme-icon"
            src="/assets/icons/color_theme_icon.svg"
            width={24}
            height={24}
            className="m-1"
          />
        </div>
        <div><CustomButton variant="primary" text="Upgrade" icon="/assets/icons/premiumcrown_icon.svg" /></div>
      </div>
    </div>
  );
};

export default TopBar;
