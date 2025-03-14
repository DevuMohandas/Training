import Image from 'next/image';
import React, { useEffect } from 'react';
import ImageWithIcons from '../atoms/ImageWithIcons';

type ImageStackProps = {
  title: string;
  imageList: string[];
  setViewingImage: (src: string) => void;
  setPrompt: (prompt: string) => void;
  setNegativePrompt: (negativePrompt: string) => void;
  setCardVisibility: (cardVisible: boolean) => void;
  handleDeletedImage: (src: string) => void;
  setEditMode: (setEditMode: boolean) => void;
  handleDownload: (src: string) => void;
};

const ImageStack = ({ title, imageList, setViewingImage, setPrompt, setCardVisibility, handleDeletedImage, setEditMode, handleDownload }: ImageStackProps) => {
  useEffect(() => {
    setPrompt(title);
  }, [title, setPrompt]);

  if (imageList.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center gap-2">
        <div className="border-2 border-[#1C212A] rounded-[0.25rem]">
          <Image
            alt="image"
            src={imageList[0] ?? 'assets/images/j1.svg'}
            width={60}
            height={46}
          />
        </div>
        <div className="font-satoshi font-normal md:text-[1rem] lg:text-[1.25rem] text-primary">{title}</div>
      </div>

      <div className="grid gap-[1rem] sm:grid-cols-2 lg:grid-cols-3 xl:grid-rows-1 xl:grid-cols-4">
        {imageList.map((img, index) => (
          img && (
            <ImageWithIcons
              src={img}
              key={index}
              setCardVisibility={setCardVisibility}
              setViewingImage={setViewingImage}
              handleDeletedImage={handleDeletedImage}
              setEditMode={setEditMode}
              handleDownload={handleDownload}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default ImageStack;
