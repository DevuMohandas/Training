import Image from 'next/image';
import { ICONS } from '../../constants/EnvogueaiConstants';
import CustomButton from '../atoms/CustomButton';

const UpgradeNoticeCard = () => {
  return (
    <div
      className="flex p-[1px] rounded-[1rem] bg-gradient-main"
    >
      <div className="w-[100%] bg-card rounded-[1rem]">
        <div className="flex flex-col justify-center items-center w-[100%]
         rounded-[1rem] card-bg-special p-2 gap-2 xl:gap-[0.813rem] xl:pt-[0.75rem] xl:pb-[1.188rem] text-[0.875rem]"
        >
          <Image
            alt="icon"
            src={ICONS.SPARKLE_ICON}
            width={24}
            height={24}
          />
          <div className="text-satoshi text-sm xl:text-[0.875rem] text-primary font-bold text-center">
            Unlock Magic AI Features
          </div>
          <div className="w-full flex justify-center px-2">
            <CustomButton variant="primary" text="Upgrade" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeNoticeCard;

// gap-[0.813rem] pt-[0.75rem] pb-[1.188rem]  className="w-[9.875rem]"
