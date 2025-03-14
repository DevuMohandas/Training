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
  const [cardVisible, setCardVisible] = useState(false);
  const [src, setSrc] = useState('');
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('Negative Prompt');
  const [confirmationVisible, setConfimationVisible] = useState(false);
  const [imageToDelete, setImageToDelete] = useState<string | null>(null);

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

  const handleDownload = async (src: string) => {
    try {
      const response = await fetch(src); // Fetch the image data
      const blob = await response.blob(); // Convert response to a Blob
      const blobUrl = URL.createObjectURL(blob); // Create a temporary URL

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'downloaded-image';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading the Image', error);
    }
  };

  return (
    <div className="relative h-full overflow-y-auto scrollbar-hide">
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
                imageList.slice().reverse().map((imageSet, index) => (
                  <ImageStack
                    key={index}
                    imageList={imageSet}
                    title="Design a discovery page for selling Scandinavia designer furnitures, it has the app name at the top, a hero section."
                    setViewingImage={setSrc}
                    setPrompt={setPrompt}
                    setNegativePrompt={setNegativePrompt}
                    setCardVisibility={setCardVisible}
                    handleDeletedImage={handleDeletedImage}
                    setEditMode={setEditMode}
                    handleDownload={handleDownload}
                  />
                ))
              )}
            </div>
          )}
      {cardVisible && (
        <div className="absolute top-[3.8rem] w-full flex justify-center"><ImageViewCard src={src} prompt={prompt} negativePrompt={negativePrompt} setCardVisibility={setCardVisible} handleDeletedImage={handleDeletedImage} setEditMode={setEditMode} handleDownload={handleDownload} /></div>)}
      {confirmationVisible && (
        <div className="absolute top-[12rem] flex justify-center w-full"><ConfirmationPopup onConfirm={confirmDeletion} onCancel={() => setConfimationVisible(false)} title="Delete Image" subtitle="Are you sure you want delete this image?" buttonText="Confirm" /></div>) }
    </div>
  );
};

export default MainContent;
