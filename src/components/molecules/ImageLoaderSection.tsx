import { AIimageList } from '@/constants/EnvogueaiConstants';
import { useEffect } from 'react';
import LoadingImage from '../atoms/LoadingImage';

type ImageLoaderSectionProps = {
  variants: number | null;
  setLastGeneratedImages: (images: string[]) => void;
};

const ImageLoaderSection = ({ variants, setLastGeneratedImages }: ImageLoaderSectionProps) => {
  const displayedImages = AIimageList.slice(0, variants || 0);
  useEffect(() => {
    setLastGeneratedImages(displayedImages.map(img => img.src));
  }, [variants]);

  return (
    <div key={variants} className="grid grid-cols-2 md:grid-cols-2 gap-[1.5rem] lg:w-[30rem]">
      {AIimageList.map(img => (
        <LoadingImage key={img.id} src={img.src} />
      ))}
    </div>
  );
};

export default ImageLoaderSection;
