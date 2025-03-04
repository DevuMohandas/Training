import { useEffect } from 'react';
import LoadingImage from '../atoms/LoadingImage';

type ImageLoaderSectionProps = {
  variants: number | null;
  setLastGeneratedImages: (images: string[]) => void; // New Prop
};

const ImageLoaderSection: React.FC<ImageLoaderSectionProps> = ({ variants, setLastGeneratedImages }) => {
  const imageList = [
    { id: 1, src: 'assets/images/pendant1.svg' },
    { id: 2, src: 'assets/images/pendant2.svg' },
    { id: 3, src: 'assets/images/pendant3.svg' },
    { id: 4, src: 'assets/images/pendant4.svg' },
  ];

  const displayedImages = imageList.slice(0, variants || 0);
  useEffect(() => {
    setLastGeneratedImages(displayedImages.map(img => img.src));
  }, [variants, setLastGeneratedImages]);

  return (
    <div key={variants} className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-[1.5rem]">
      {imageList.slice(0, variants || 0).map(img => (
        <LoadingImage key={img.id} src={img.src} />
      ))}
    </div>
  );
};

export default ImageLoaderSection;

// const [displayedImages, setDisplayedImages] = useState(imageList.slice(0, variants || 0));

//   useEffect(() => {
//     // Update images when variants change
//     setDisplayedImages(imageList.slice(0, variants || 0));
//   }, [variants]);
