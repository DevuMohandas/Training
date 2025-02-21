import { IMAGEPATHS } from '../../constants/EnvogueaiConstants';
import ImageStack from '../molecules/ImageStack';
import LiteModeTopBar from '../molecules/LiteModeTopBar';
import ActionPanel from '../organisms/ActionPanel';
import SideBar from '../organisms/SideBar';

const EnvogueLitemode = () => {
  return (
    <div className="bg-body">
      <LiteModeTopBar />
      <div className="flex">
        <div><SideBar /></div>
        <div><ActionPanel /></div>
        <div className="flex flex-col gap-10 px-[3rem] pt-[1.3125rem]">
          <ImageStack imageList={IMAGEPATHS.pendants} title="Design a discovery page for selling Scandinavia designer furnitures, it has the app name at the top, a hero section." />
          <ImageStack imageList={IMAGEPATHS.rings} title="Design a discovery page for selling Scandinavia designer furnitures, it has the app name at the top, a hero section." />
        </div>
      </div>
    </div>
  );
};

export default EnvogueLitemode;
