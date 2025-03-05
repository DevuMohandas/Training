import { useEffect, useState } from 'react';
import ImageStack from '../molecules/ImageStack';
import GenerateMode from './GenerateMode';

type MainContentProps = {
  variant: number | null ;
  setVariant: (variant: number | null) => void;
};

const MainContent: React.FC<MainContentProps> = ({ variant, setVariant }) => {
  const [lastGeneratedImages, setLastGeneratedImages] = useState<string[]>([]);
  const [imageList, setImageList] = useState<string[][]>([]);

  useEffect(() => {
    if (lastGeneratedImages.length > 0) {
      setImageList(prev => [...prev, lastGeneratedImages]);
    }
  }, [lastGeneratedImages]);

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
              {imageList.length > 0 && (
                imageList.map((imageSet, index) => (
                  <ImageStack
                    key={index}
                    imageList={imageSet}
                    title="Design a discovery page for selling Scandinavia designer furnitures, it has the app name at the top, a hero section."
                  />
                ))
              )}
            </div>
          )}
    </div>
  );
};

export default MainContent;
