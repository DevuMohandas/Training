import Image from 'next/image';
import CustomButton from '../atoms/CustomButton';

const UpgradeNoticeCard = () => {
  return (
    <div
      className="flex flex-col pt-[13px] pb-[10px] gap-[13px]
      justify-center items-center rounded-[16px] bg-blue-300"
    >
      <div>
        <Image
          alt="icon"
          src="assets/icons/sparkle-vector.svg"
          width={24}
          height={24}
        />
      </div>
      <div className="text-satoshi text-[14px] text-[#ffffff] font-700">
        Unlock Magic AI Features
      </div>
      <div>
        <CustomButton variant="primary" text="Upgrade" />
      </div>
    </div>
  );
};

export default UpgradeNoticeCard;
