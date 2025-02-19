import Image from 'next/image';
import React from 'react';

type ImageThumpnailProps = {
  image: string;
  description: string;
};

const ImageThumpnail: React.FC<ImageThumpnailProps> = ({ image, description }) => {
  return (
    <div className="flex flex-col">
      <div className=" rounded-t-[0.9375rem]">
        <Image
          alt="product-image"
          src={image}
          width={500}
          height={186.23}
          layout="responsive"
        />
      </div>
      {/* <div className="flex justify-center items-center border-2 border-[#1C212A]">
        <div className="text-[#FFFFFF] text-[0.75rem] font-satoshi font-[200] leading-[16px]">{description}</div>
      </div> */}
    </div>
  );
};

export default ImageThumpnail;
