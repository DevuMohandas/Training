import Image from 'next/image';
import CustomButton from '../atoms/CustomButton';

const UpgradeNoticeCard = () => {
  return (
    <div
      className="flex p-[1px] rounded-[1rem]"
    >
      <div className="flex flex-col justify-center items-center gap-[0.813rem] w-[100%] pt-[0.75rem] pb-[1.188rem] rounded-[1rem] bg-gradient-svg">
        <div>
          <Image
            alt="icon"
            src="assets/icons/sparkle-vector.svg"
            width={24}
            height={24}
          />
        </div>
        <div className="text-satoshi text-[0.875rem] text-primary font-700">
          Unlock Magic AI Features
        </div>
        <div>
          <CustomButton variant="primary" text="Upgrade" />
        </div>
      </div>
    </div>
  );
};

export default UpgradeNoticeCard;
