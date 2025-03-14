import Image from 'next/image';

type ImageAnimationCardProps = {
  src: string;
};

const ImageAnimationCard = ({ src }: ImageAnimationCardProps) => {
  return (
    <div className="relative w-full">
      <Image src={src} alt="AI-Image" width={1012} height={536} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-black/90">
        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 py-2.5">
          <div className="text-center text-white text-[1.5rem] md:text-[1.85rem] lg:text-[2.5rem] xl:text-[3rem] leading-[3.625rem] font-bold font-merriweather">Bring Your Dreams to Life</div>
          <div className="text-center text-white text-[0.75rem] lg:text-[1rem] xl:text-[1.25rem] leading-[1.375rem] font-bold">Create realistic art from a description.</div>
        </div>
      </div>
    </div>
  );
};

export default ImageAnimationCard;
