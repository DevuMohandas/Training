import Image from 'next/image';

type ImageAnimationCardProps = {
  src: string;
  variant?: 'promptpage' | 'templatepage';
};

const ImageAnimationCard = ({ src, variant }: ImageAnimationCardProps) => {
  return (
    <div className="relative w-full h-full">
      <Image src={src} alt="AI-Image" width={1012} height={536} priority className="w-full h-full object-cover" />
      <div className={`absolute inset-0 flex flex-col ${variant === 'promptpage' ? 'justify-end bg-gradient-to-b from-transparent to-black/90' : 'pt-space-20 animation-card-gradient'}`}>
        <div className="flex flex-col gap-space-02 new-md:gap-space-03 new-lg:gap-space-04 py-space-03">
          <div className={`text-center text-white text-xl ${variant === 'promptpage' ? 'new-md:text-2xl' : 'new-sm:text-4xl'} new-lg:text-5xl new-xl:text-6xl leading-huge font-system-bold font-merriweather`}>Bring Your Ideas To Life</div>
          <div className="text-center text-white text-sm new-lg:text-md new-xl:text-lg leading-relaxed font-system-bold">Create realistic art from a description.</div>
        </div>
      </div>
    </div>
  );
};

export default ImageAnimationCard;
