import Image from 'next/image';
import Diamonds from '../atoms/Diamonds';

const LiteModeTopBar = () => {
  return (
    <div className="flex justify-between bg-gradient-to-br from-[#06090E] to-[#0C111A] border-1 border-[#1C212A] p-[0.6875rem]">
      <div>
        <Image alt="envogue-logo" src="assets/icons/envogue_logo.svg" width={30} height={34} />
      </div>
      <div className="flex items-center gap-[13px]">
        <div><Diamonds diamonds={50} /></div>
        <div className="flex justify-center w-[2rem] h-[1.875rem] rounded-[10px] bg-[#10151F]">
          <Image
            alt="theme-icon"
            src="/assets/icons/color_theme_icon.svg"
            width={24}
            height={24}
            className="m-1"
          />
        </div>
      </div>
    </div>
  );
};

export default LiteModeTopBar;
