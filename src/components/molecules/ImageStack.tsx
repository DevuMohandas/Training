import Image from 'next/image';
import React from 'react';

type ImageStackProps = {
  title: string;
  imageList: string[];
};

const ImageStack: React.FC<ImageStackProps> = ({ title, imageList }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center gap-2">
        <div className="border-2 border-[#1C212A] rounded-[0.25rem]">
          <Image
            alt="image"
            src={imageList[0]}
            width={60}
            height={46}
          />
        </div>
        <div className="font-satoshi font-normal md:text-[1rem] lg:text-[1.25rem] text-primary">{title}</div>
      </div>

      <div className="grid gap-[1rem] sm:grid-rows-2 sm:grid-cols-2 xl:grid-rows-1 xl:grid-cols-4">
        {imageList.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="image"
            width={219}
            height={219}
            layout="responsive"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageStack;
