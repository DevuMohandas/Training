import { useEffect } from 'react';
import LoadingImage from '../atoms/LoadingImage';

type ImageLoaderSectionProps = {
  variants: number | null;
  setLastGeneratedImages: (images: string[]) => void; // New Prop
};

const ImageLoaderSection: React.FC<ImageLoaderSectionProps> = ({ variants, setLastGeneratedImages }) => {
  const imageList = [
    { id: 1, src: 'assets/images/j8.svg' },
    { id: 2, src: 'assets/images/j11.svg' },
    { id: 3, src: 'assets/images/bangles.svg' },
    { id: 4, src: 'assets/images/j10.svg' },
  ];

  const displayedImages = imageList.slice(0, variants || 0);
  useEffect(() => {
    setLastGeneratedImages(displayedImages.map(img => img.src));
  }, [variants]);

  return (
    <div key={variants} className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
      {imageList.slice(0, variants || 0).map(img => (
        <LoadingImage key={img.id} src={img.src} />
      ))}
    </div>
  );
};

export default ImageLoaderSection;

// <div key={img.id} className="lg:w-[15rem] lg:h-[15rem] border border-white"><LoadingImage key={img.id} src={img.src} /></div>
//  border border-white