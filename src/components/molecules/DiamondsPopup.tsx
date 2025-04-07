'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CustomButton from '../atoms/CustomButton';
import GradientBorderButton from '../atoms/GradientBorderButton';

type DiamondsPopupProps = {
  setVisibiliy: (visibility: boolean) => void;
};

const DiamondsPopup = ({ setVisibiliy }: DiamondsPopupProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push('/envogue_magicmode');
    setVisibiliy(false);
  };
  return (
    <div className="lg:w-[26.31rem] pt-[14px] pb-space-10 px-[19px] border-[1px] card-border bg-card rounded-[14px]">
      <div className="flex flex-col">
        <button type="button" className="self-end cursor-pointer" onClick={() => setVisibiliy(false)}><Image src="/assets/icons/close-vector.svg" width={14} height={14} alt="close" /></button>

        <div className="flex gap-space-02">
          <Image src="/assets/images/golden-diamonds.svg" width={48} height={48} alt="diamond" />
          <div className="flex flex-col gap-space-02">
            <p className="text-primary text-lg font-system-bold leading-loose">
              {`You have ${0} Jewels`}
            </p>
            <p className="text-primary text-lg font-system-regular leading-[30px]">A basic generation costs - 12 Jewels</p>
          </div>
        </div>

        <div className="mt-space-08 self-center"><GradientBorderButton variant="primary" text="Get 50% OFF Jewels with pro. Upgrade Now" className="w-[338px] h-[45px]" /></div>
        <div className="w-[240.78px] h-[40px] mt-space-08 self-center"><CustomButton text="Buy Jewels" variant="primary" className="w-full" onClick={handleNavigation} /></div>
      </div>
    </div>
  );
};

export default DiamondsPopup;
