import { useEffect } from 'react';
import LoadingImage from '../atoms/LoadingImage';

type ImageLoaderSectionProps = {
  variants: number | null;
  setLastGeneratedImages: (images: string[]) => void;
};

const ImageLoaderSection = ({ variants, setLastGeneratedImages }: ImageLoaderSectionProps) => {
  const imageList = [
    { id: 1, src: '/assets/images/animation-image1.jpg' },
    { id: 2, src: '/assets/images/animation-image2.jpg' },
    { id: 3, src: '/assets/images/animation-image3.jpg' },
    { id: 4, src: '/assets/images/animation-image4.jpg' },
  ];

  const displayedImages = imageList.slice(0, variants || 0);
  useEffect(() => {
    setLastGeneratedImages(displayedImages.map(img => img.src));
  }, [variants]);

  return (
    <div key={variants} className="grid grid-cols-2 md:grid-cols-2 gap-[1.5rem] lg:w-[30rem]">
      {imageList.slice(0, variants || 0).map(img => (
        <LoadingImage key={img.id} src={img.src} />
      ))}
    </div>
  );
};

export default ImageLoaderSection;
