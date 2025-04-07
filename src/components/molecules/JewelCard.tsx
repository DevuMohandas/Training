import Image from 'next/image';
import GradientBorderButton from '../atoms/GradientBorderButton';

type JewelCardProps = {
  diamonds: number;
  title: string;
  priceForEach?: string;
  getJewelPrice?: string;
  popular?: boolean;
  free?: boolean;
};

const JewelCard = ({ diamonds, title, priceForEach, getJewelPrice, free }: JewelCardProps) => {
  return (
    <div className="w-full aspect-[279/256] border-[1px] bg-transparent card-border rounded-radius-lg flex justify-center items-center">
      <div className="flex flex-col gap-space-06">
        <div className="flex flex-col">
          {diamonds === 1
            ? <div className="w-[114px] h-[94px] flex justify-center"><Image src="/assets/images/golden-diamond.svg" alt="diamonds" width={68} height={68} /></div>
            : <Image src="/assets/images/golden-diamonds.svg" alt="diamonds" width={114} height={94} />}
          <p className="text-primary font-system-bold text-lg text-center">{title}</p>
          {free
            ? <div className="bg-gradient-main text-primary text-sm font-system-regular w-12 h-4 rounded-radius-smallest flex justify-center items-center self-center">Free</div>
            : (
                <p className="text-primary text-center text-sm font-system-regular">
                  {priceForEach}
                  <span> each</span>
                </p>
              ) }
        </div>
        <div className="flex flex-col gap-space-02">
          {getJewelPrice && (
            <p className="text-primary text-sm font-system-regular text-center">
              {`Only ${getJewelPrice} with Pro`}
            </p>
          )}
          <div className=""><GradientBorderButton text="Get Jewels" variant="secondary" className="h-7 w-[7.375rem]" /></div>
        </div>
      </div>
    </div>
  );
};

export default JewelCard;
