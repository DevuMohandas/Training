import Image from 'next/image';
import ImageLoaderSection from '../molecules/ImageLoaderSection';

type VariantsWithPromptprops = {
  variant: number | null;
  prompt?: string;
  setLastGeneratedImages: (images: string[]) => void;
};

const VariantsWithPrompt = ({ variant, setLastGeneratedImages }: VariantsWithPromptprops) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-space-06">
        <Image src="/assets/images/pendant1.svg" width={60} height={46} alt="image" />
        <div className="text-md new-lg:text-lg font-system-regular text-primary">
          Design a discovery page for selling Scandinavia designer furnitures, it has the app name at the top, a hero section.
        </div>
      </div>
      <div className="p-space-03 new-lg:p-space-16 flex justify-center">
        <ImageLoaderSection
          variants={variant}
          setLastGeneratedImages={setLastGeneratedImages}
        />
      </div>
    </div>
  );
};

export default VariantsWithPrompt;
