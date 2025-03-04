import Image from 'next/image';
import ImageLoaderSection from '../molecules/ImageLoaderSection';

type VariantsWithPromptprops = {
  variant: number | null;
  prompt?: string;
  setLastGeneratedImages: (images: string[]) => void;
};

const VariantsWithPrompt: React.FC<VariantsWithPromptprops> = ({ variant, setLastGeneratedImages }) => {
  return (
    <div className="flex flex-col gap-[4.3125rem] w-[100%]">
      <div className="flex gap-6">
        <Image src="assets/images/pendant1.svg" width={60} height={46} alt="image" />
        <div className="text-[1.25rem] font-normal text-primary">
          Design a discovery page for selling Scandinavia designer furnitures, it has the app name at the top, a hero section.
        </div>
      </div>
      <div className="xl:px-16">
        <ImageLoaderSection
          variants={variant}
          setLastGeneratedImages={setLastGeneratedImages}
        />
      </div>
    </div>
  );
};

export default VariantsWithPrompt;
