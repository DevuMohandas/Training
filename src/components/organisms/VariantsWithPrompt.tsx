import Image from 'next/image';
import ImageLoaderSection from '../molecules/ImageLoaderSection';

type VariantsWithPromptprops = {
  variant: number | null;
  prompt?: string;
  setLastGeneratedImages: (images: string[]) => void;
};

const VariantsWithPrompt = ({ variant, setLastGeneratedImages }: VariantsWithPromptprops) => {
  return (
    <div className="flex flex-col w-[100%]">
      <div className="flex gap-6">
        <Image src="assets/images/pendant1.svg" width={60} height={46} alt="image" />
        <div className="text-[1.25rem] font-normal text-primary">
          Design a discovery page for selling Scandinavia designer furnitures, it has the app name at the top, a hero section.
        </div>
      </div>
      <div className="p-3 lg:p-16 flex justify-center">
        <ImageLoaderSection
          variants={variant}
          setLastGeneratedImages={setLastGeneratedImages}
        />
      </div>
    </div>
  );
};

export default VariantsWithPrompt;
