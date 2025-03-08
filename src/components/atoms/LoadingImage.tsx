'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FadeLoader } from 'react-spinners';

type LoadingImageProps = {
  src: string;
};

const LoadingImage: React.FC<LoadingImageProps> = ({ src }) => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={`p-[2px] overflow-hidden rounded-[26px] ${isLoading ? 'bg-gradient-main' : '#393C42'}`}>
      <div className="w-[100%] h-[100%] relative bg-black rounded-[30px]">
        <Image
          src={src}
          alt="Image Loading"
          width={331}
          height={331}
          className={`transition-opacity duration-500 w-[100%] h-[100%] aspect-square object-cover ${isLoading ? 'opacity-20' : 'opacity-100'}`}
        />
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center">
            <FadeLoader color="white" loading speedMultiplier={1} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingImage;
