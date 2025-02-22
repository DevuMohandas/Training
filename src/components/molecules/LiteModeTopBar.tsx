import { EnvogueLogoIcon } from '@/assets/TopBarIcons';
import Diamonds from '../atoms/Diamonds';
import ThemeToggleButton from '../atoms/ThemeToggleButton';

const LiteModeTopBar = () => {
  return (
    <div className="flex justify-between bg-special border-1 border-[#1C212A] p-[0.6875rem]">
      <div>
        {/* <Image alt="envogue-logo" src={ICONS.ENVOGUE_LOGO} width={30} height={34} /> */}
        <EnvogueLogoIcon className="color-icon" />
      </div>
      <div className="flex items-center gap-[0.813rem]">
        <div><Diamonds diamonds={50} /></div>
        <div><ThemeToggleButton /></div>
      </div>
    </div>
  );
};

export default LiteModeTopBar;
