import { PROMPTMENU_OPTIONS } from '@/constants/EnvogueaiConstants';
import { useState } from 'react';
import CustomButton from '../atoms/CustomButton';
import NegativePromptSection from '../molecules/NegativePromptSection';
import PromptMenu from '../molecules/PromptMenu';
import PromptSection from './PromptSection';

type PromptModeSectionProps = {
  autoprompt: string | undefined;
  setIsTyping: (setIstyping: boolean) => void;
  setIsLoading: (setIsLoading: boolean) => void;
  setUserPrompt: (setUserPrompt: string) => void;
};

const PromptModeSection = ({ autoprompt, setIsTyping, setIsLoading, setUserPrompt }: PromptModeSectionProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPromptIds, setSelectedPromptIds] = useState<number[]>([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSelectedPrompt = (id: number) => {
    if (!selectedPromptIds.includes(id)) {
      setSelectedPromptIds(prev => [...prev, id]);
    }
  };

  const handleRemovePrompt = (id: number) => {
    setSelectedPromptIds(prev => prev.filter(promptId => promptId !== id));
  };

  const selectedPrompts = selectedPromptIds
    .map(id => PROMPTMENU_OPTIONS.find(option => option.id === id)) // Find the object
    .filter(option => option !== undefined) // Remove undefined values
    .map(option => option!.option); // Extract `option` value safely

  return (
    <div className="flex flex-col px-space-08 new-md:px-space-12 new-xl:px-space-16 pt-space-06 h-full gap-space-04 new-md:gap-space-06 new-lg:gap-space-06 new-xl:gap-space-08">
      <div className="relative">
        {menuOpen && (
          <div className="absolute bottom-full left-0 w-full z-1">
            <PromptMenu
              variant="promptmodepage"
              onSelectPrompt={handleSelectedPrompt}
              onRemovePrompt={handleRemovePrompt}
              isMenuOpen={menuOpen}
              toggleMenu={toggleMenu}
            />
          </div>
        )}
        <div className="min-h-[4.56rem]">
          <PromptSection
            selectedPrompts={selectedPrompts}
            toggleMenu={toggleMenu}
            autoPrompt={autoprompt}
            setIsTyping={setIsTyping}
            setUserPrompt={setUserPrompt}
          />
        </div>
      </div>
      <div className="min-h-[4.56rem]">
        <NegativePromptSection />
      </div>
      <div className="flex justify-end">
        <div className="flex flex-col gap-space-02">
          <CustomButton text="Generate" variant="primary" onClick={() => setIsLoading(true)} />
          <div className="text-base text-[#A6A6A6] font-satoshi font-system-bold text-center">This will use 12 Jewels</div>
        </div>
      </div>
    </div>
  );
};

export default PromptModeSection;
