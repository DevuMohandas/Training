import { useCardVisibility } from '@/hooks/useCardVisibility';
import { useEffect, useState } from 'react';
import ConfirmationPopup from '../molecules/ConfirmationPopup';
import ImageStack from '../molecules/ImageStack';
import ImageViewCard from '../molecules/ImageViewCard';
import GenerateMode from './GenerateMode';

type MainContentProps = {
  variant: number | null ;
  setVariant: (variant: number | null) => void;
  setEditMode: (setEditMode: boolean) => void;
};

const MainContent = ({ variant, setVariant, setEditMode }: MainContentProps) => {
  const [lastGeneratedImages, setLastGeneratedImages] = useState<string[]>([]);
  const [imageList, setImageList] = useState<string[][]>([]);
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('Negative Prompt');
  const [confirmationVisible, setConfimationVisible] = useState(false);
  const [imageToDelete, setImageToDelete] = useState<string | null>(null);
  const { cardVisible, viewingImage } = useCardVisibility();

  useEffect(() => {
    if (lastGeneratedImages.length > 0) {
      setImageList(prev => [...prev, lastGeneratedImages]);
    }
  }, [lastGeneratedImages]);

  const handleDeletedImage = (deletedSrc: string) => {
    setImageToDelete(deletedSrc);
    setConfimationVisible(true);
  };

  const confirmDeletion = () => {
    if (imageToDelete) {
      setImageList(prev => prev.map(imageSet => imageSet.filter(src => src !== imageToDelete)));
    }
    setImageToDelete(null);
    setConfimationVisible(false);
  };

  return (
    <div className="relative h-full overflow-y-auto custom-scrollbar">
      {variant
        ? (
            <GenerateMode
              variant={variant}
              setVariant={setVariant}
              setLastGeneratedImages={setLastGeneratedImages}
            />
          )
        : (
            <div className="flex flex-col gap-space-10">
              {imageList.length > 0 && (
                imageList.slice().reverse().map((imageSet, index) => (
                  <ImageStack
                    key={index}
                    imageList={imageSet}
                    title="Design a discovery page for selling Scandinavia designer furnitures, it has the app name at the top, a hero section."
                    setPrompt={setPrompt}
                    setNegativePrompt={setNegativePrompt}
                    handleDeletedImage={handleDeletedImage}
                    setEditMode={setEditMode}
                  />
                ))
              )}
            </div>
          )}
      {cardVisible
      && (
        <div className="absolute top-[3.8rem] w-full flex justify-center">
          <ImageViewCard src={viewingImage} prompt={prompt} negativePrompt={negativePrompt} handleDeletedImage={handleDeletedImage} />
        </div>
      )}
      {confirmationVisible
      && (
        <div className="absolute top-[12rem] flex justify-center w-full">
          <ConfirmationPopup onConfirm={confirmDeletion} onCancel={() => setConfimationVisible(false)} title="Delete Image" subtitle="Are you sure you want delete this image?" buttonText="Confirm" />
        </div>
      )}
    </div>
  );
};

export default MainContent;
