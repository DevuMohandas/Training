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
    <div className="flex flex-col gap-9 w-[100%]">
      <div className="flex">
        <button type="button" onClick={goBack} className="w-[32px] h-[28px] bg-card border card-border flex justify-center items-center rounded-[7px]">
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
