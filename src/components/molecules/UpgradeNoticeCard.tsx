import Image from 'next/image';
import { ICONS } from '../../constants/EnvogueaiConstants';
import CustomButton from '../atoms/CustomButton';

const UpgradeNoticeCard = () => {
  return (
    <div
      className="flex p-space-smallest rounded-radius-xl bg-gradient-main"
    >
      <div className="w-full bg-card rounded-radius-xl">
        <div className="flex flex-col justify-center items-center
         rounded-radius-xl bg-card p-space-02 gap-space-03 pt-space-03 pb-space-04 text-base"
        >
          <Image
            alt="icon"
            src={ICONS.SPARKLE_ICON}
            width={24}
            height={24}
            loading="eager"
            priority={false}
          />
          <div className="text-sm new-lg:text-base text-primary font-system-bold text-center">
            Unlock AI Magic Features
          </div>
          <div className="flex justify-center px-space-02">
            <CustomButton variant="primary" text="Upgrade" className="w-[8.875rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeNoticeCard;

// gap-[0.813rem] pt-[0.75rem] pb-[1.188rem]  className="w-[9.875rem]"
// card-bg-special
