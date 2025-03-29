import { AIImageCarousel } from '@/constants/EnvogueaiConstants';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type AIImage = {
  id: number;
  src: string;
};

type ImageCarouselProps = {
  variants: number | null;
  setSelectedVariant: (src: string) => void;
  generatedImage: (src: string) => void;
  imageToDelete: string;
};

const ImageCarousel = ({ variants, setSelectedVariant, imageToDelete }: ImageCarouselProps) => {
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  const [imageList, setImageList] = useState<AIImage[]>([]);

  useEffect (() => {
    if (variants && variants > 0) {
      setImageList(AIImageCarousel.slice(0, variants));
    } else {
      setImageList([]);
    }
  }, [variants]);

  useEffect(() => {
    if (imageToDelete) {
      setImageList(prevList => prevList.filter(img => img.src !== imageToDelete));
    }
  }, [imageToDelete]);

  const handleImageClick = (id: number, src: string) => {
    setSelectedImageId(id);
    setSelectedVariant(src);
  };

  return (
    <div className="grid grid-flow-col auto-cols-max gap-space-03">
      {imageList.map(obj => (
        <div key={obj.id}>
          <button
            type="button"
            onClick={() => handleImageClick(obj.id, obj.src)}
            className={`rounded-radius-smallest p-[1px] cursor-pointer ${selectedImageId === obj.id ? 'scale-110 bg-gradient-to-r from-[#8B2BE2] to-[#4D02E0]' : 'bg-[#1C212A]'}`}
          >
            <Image src={obj.src} width={98} height={84} alt="variant" className="rounded-radius-smallest" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
