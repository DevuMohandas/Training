import Image from 'next/image';
import React, { useEffect } from 'react';
import ImageWithIcons from '../atoms/ImageWithIcons';

type ImageStackProps = {
  title: string;
  imageList: string[];
  setPrompt: (prompt: string) => void;
  setNegativePrompt: (negativePrompt: string) => void;
  handleDeletedImage: (src: string) => void;
  setEditMode: (setEditMode: boolean) => void;
};

const ImageStack = ({ title, imageList, setPrompt, handleDeletedImage }: ImageStackProps) => {
  useEffect(() => {
    setPrompt(title);
  }, [title, setPrompt]);

  if (imageList.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-space-04">
      <div className="flex justify-center items-center gap-space-02">
        <div className="border-2 border-[#1C212A] rounded-radius-xs">
          <Image
            alt="image"
            src={imageList[0] ?? 'assets/images/j1.svg'}
            width={60}
            height={46}
          />
        </div>
        <div className="font-satoshi font-system-regular text-md new-md:text-lg text-primary">{title}</div>
      </div>

      <div className="grid gap-space-04 sm:grid-cols-2 lg:grid-cols-3 xl:grid-rows-1 xl:grid-cols-4">
        {imageList.map((img, index) => (
          img && (
            <ImageWithIcons
              src={img}
              key={index}
              handleDeletedImage={handleDeletedImage}
              // setEditMode={setEditMode}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default ImageStack;
