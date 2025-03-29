import { useEffect, useState } from 'react';
import { FadeLoader } from 'react-spinners';
import ImageWithIcons from './ImageWithIcons';

type LoadingImageProps = {
  src: string;
  setImageToDelete: (src: string) => void;
};

const LoadingImage = ({ src, setImageToDelete }: LoadingImageProps) => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={`overflow-hidden rounded-3xl ${isLoading ? 'bg-gradient-main p-[2px]' : 'bg-black'}`}>
      <div className="w-full h-full relative bg-black rounded-3xl overflow-hidden">
        <div className={`transition-opacity duration-500 aspect-square object-cover ${isLoading ? 'opacity-20' : 'opacity-100'}`}>
          <ImageWithIcons
            handleDeletedImage={setImageToDelete}
            src={src}
          />
        </div>
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

//  {/* <Image
//           src={src}
//           alt="Image Loading"
//           width={331}
//           height={331}
//           layout="responsive"
//           className={`transition-opacity duration-500 aspect-square object-cover ${isLoading ? 'opacity-20' : 'opacity-100'}`}
//         /> */}
