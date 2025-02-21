import Image from 'next/image';
import CustomButton from '../atoms/CustomButton';

const UpgradeNoticeCard = () => {
  return (
    <div
      className="flex p-[1px] rounded-[16px]"
    >
      <div className="flex flex-col justify-center items-center gap-[13px] w-[100%] pt-[12px] pb-[19px] rounded-[16px] bg-gradient-svg">
        <div>
          <Image
            alt="icon"
            src="assets/icons/sparkle-vector.svg"
            width={24}
            height={24}
          />
        </div>
        <div className="text-satoshi text-[14px] text-primary font-700">
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
