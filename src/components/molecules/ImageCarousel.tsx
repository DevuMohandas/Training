'use client';
import { AIImageCarousel } from '@/constants/EnvogueaiConstants';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type AIImage = {
  id: number;
  src: string;
};

type ImageCarouselProps = {
  variants: number | null;
  setSelectedImage: (src: string) => void;
  setFirstImage: (src: string) => void;
  deletedImage: string;
};

const ImageCarousel = ({ variants, setSelectedImage, setFirstImage, deletedImage }: ImageCarouselProps) => {
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  const [imageList, setImageList] = useState<AIImage[]>([]);
  const [deletedImages, setDeletedImages] = useState<string[]>([]);

  useEffect(() => {
    if (variants && variants > 0) {
      let newImageList = AIImageCarousel.slice(0, variants);
      newImageList = newImageList.filter(image => !deletedImages.includes(image.src));
      setImageList(newImageList);
      setFirstImage(newImageList[0]?.src ?? '');
    } else {
      setImageList([]);
    }
  }, [variants, setFirstImage, deletedImages]);

  useEffect(() => {
    if (deletedImage) {
      setDeletedImages(prev => [...prev, deletedImage]);
    }
  }, [deletedImage]);

  const handleClick = (id: number, src: string) => {
    setSelectedImageId(id);
    setSelectedImage(src);
  };

  return (
    <div className="grid grid-flow-col auto-cols-max gap-space-03">
      {imageList.map(obj => (
        <div key={obj.id}>
          <button
            type="button"
            onClick={() => handleClick(obj.id, obj.src)}
            className={`rounded-radius-smallest p-space-0 cursor-pointer ${selectedImageId === obj.id ? 'scale-110 bg-gradient-to-r from-[#8B2BE2] to-[#4D02E0]' : 'bg-[#1C212A]'}`}
          >
            <Image src={obj.src} width={98} height={84} alt="variant" className="rounded-radius-smallest" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
