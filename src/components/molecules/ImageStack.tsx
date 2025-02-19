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
        <div className="border-[1px] border-[#1C212A] rounded-[4px]  w-[60px] h-[46px]">
          <Image
            alt="image"
            src={imageList[0]}
            width={60}
            height={46}
          />
        </div>
        <div className="text-[#ffffff] font-satoshi font-normal md:text-[1rem] lg:text-[20px]">{title}</div>
      </div>

      <div className="grid gap-[16px] sm:grid-rows-2 sm:grid-cols-2 xl:grid-rows-1 xl:grid-cols-4">
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
