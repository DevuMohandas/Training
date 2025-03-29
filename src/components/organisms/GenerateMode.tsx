import { BackArrow } from '@/assets/OtherIcons';
import VariantsWithPrompt from './VariantsWithPrompt';

type GenerateModeProps = {
  variant: number | null;
  setVariant: (variant: number | null) => void;
  setLastGeneratedImages: (images: string[]) => void;
};

const GenerateMode: React.FC<GenerateModeProps> = ({ variant, setVariant, setLastGeneratedImages }) => {
  const goBack = () => {
    setVariant(null);
  };
  return (
    <div className="flex flex-col gap-space-08 w-full">
      <div className="flex">
        <button type="button" onClick={goBack} className="w-[2rem] h-[1.75rem] bg-card border card-border flex justify-center items-center rounded-radius-s">
          <BackArrow className="color-icon" />
        </button>
      </div>
      <div>
        <VariantsWithPrompt variant={variant} setLastGeneratedImages={setLastGeneratedImages} />
      </div>
    </div>
  );
};

export default GenerateMode;
