import Link from 'next/link';
import GradientBorderButton from '../atoms/GradientBorderButton';
import JewelCardSection from './JewelCardSection';

const BuyJewelsPage = () => {
  return (
    <div className="flex flex-col py-[87px] px-10 gap-24 w-full ">
      <div className="flex justify-between gap-space-04 md:gap-0">
        <div className="flex flex-col gap-space-03">
          <p className="text-5xl font-system-bold text-primary">Buy Jewels</p>
          <p className="text-primary text-md font-system-bold">
            Jewels are the currency of Ai jewel.
            {' '}
            <Link href="/learn-more" className="underline">
              Learn more
            </Link>
          </p>
        </div>
        <div className="self-end flex-1 max-w-[25rem]">
          <GradientBorderButton
            variant="secondary"
            text="Get 50% OFF Tokens with pro. Upgrade Now"
            icon="/assets/icons/offer-icon.svg"
            className="h-11 w-full"
          />
        </div>
      </div>
      <JewelCardSection />
    </div>
  );
};

export default BuyJewelsPage;
