import CustomButton from '../atoms/CustomButton';
import NegativePromptSection from '../molecules/NegativePromptSection';
import PromptSection from './PromptSection';

type PromptModeSectionProps = {
  autoprompt: string | undefined;
  setIsTyping: (setIstyping: boolean) => void;
  setGenerate: (setGenerate: boolean) => void;
  setUserPrompt: (setUserPrompt: string) => void;
};

const PromptModeSection = ({ autoprompt, setIsTyping, setGenerate, setUserPrompt }: PromptModeSectionProps) => {
  return (
    <div className="flex flex-col px-[2rem] md:px-[3rem] xl:px-[4rem] pt-5 h-full gap-[1rem] md:gap-[1.2rem] lg:gap-[1.5rem] xl:gap-[1.813rem]">
      <div className="min-h-[73px]">
        <PromptSection autoPrompt={autoprompt} setIsTyping={setIsTyping} setUserPrompt={setUserPrompt} />
      </div>
      <div className="min-h-[73px]">
        <NegativePromptSection />
      </div>
      <div className="flex justify-end">
        <div className="flex flex-col gap-1.5">
          <CustomButton text="Generate" variant="primary" onClick={() => setGenerate(true)} />
          <div className="text-[0.875rem] text-[#A6A6A6] font-satoshi font-bold text-center">This will use 12 Jewels</div>
        </div>
      </div>
    </div>
  );
};

export default PromptModeSection;
