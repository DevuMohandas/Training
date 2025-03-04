import { useState } from 'react';
import ImageStack from '../molecules/ImageStack';
import GenerateMode from './GenerateMode';

type MainContentProps = {
  variant: number | null ;
  setVariant: (variant: number | null) => void;
};

const MainContent: React.FC<MainContentProps> = ({ variant, setVariant }) => {
  const [lastGeneratedImages, setLastGeneratedImages] = useState<string[]>([]);
  return (
    <div>
      {variant
        ? (
            <GenerateMode
              variant={variant}
              setVariant={setVariant}
              setLastGeneratedImages={setLastGeneratedImages}
            />
          )
        : (
            <div className="flex flex-col gap-10">
              <ImageStack imageList={lastGeneratedImages} title="Design a discovery page for selling Scandinavia designer furnitures, it has the app name at the top, a hero section." />
              {/* <ImageStack imageList={IMAGEPATHS.pendants} title="Design a discovery page for selling Scandinavia designer furnitures, it has the app name at the top, a hero section." /> */}
              {/* <ImageStack imageList={IMAGEPATHS.rings} title="Design a discovery page for selling Scandinavia designer furnitures, it has the app name at the top, a hero section." /> */}
            </div>
          )}
    </div>
  );
};

export default MainContent;
