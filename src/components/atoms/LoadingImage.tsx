import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FadeLoader } from 'react-spinners';

type LoadingImageProps = {
  src: string;
};

const LoadingImage = ({ src }: LoadingImageProps) => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={`p-[2px] overflow-hidden rounded-3xl ${isLoading ? 'bg-gradient-main' : 'bg-gray-800'}`}>
      <div className="w-full h-full relative bg-black rounded-3xl overflow-hidden">
        <Image
          src={src}
          alt="Image Loading"
          width={331}
          height={331}
          layout="responsive"
          className={`transition-opacity duration-500 aspect-square object-cover ${isLoading ? 'opacity-20' : 'opacity-100'}`}
        />
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center">
            <FadeLoader color="white" speedMultiplier={1} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingImage;
