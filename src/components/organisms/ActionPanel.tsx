'use client';
import CustomButton from '@/components/atoms/CustomButton';
import FileUploadCard from '@/components/molecules/FileUploadCard';
import NegativePromptSection from '@/components/molecules/NegativePromptSection';
import PromptSection from '@/components/organisms/PromptSection';
import { PROMPTMENU_OPTIONS } from '@/constants/EnvogueaiConstants';
import { useState } from 'react';
import VarientsButton from '../atoms/VarientsButton';
import PromptMenu from '../molecules/PromptMenu';
import UpgradeNoticeCard from '../molecules/UpgradeNoticeCard';
// import { PROMPTMENU_OPTIONS } from '@/constants/EnvogueaiConstants';

type ActionPanelProps = {
  onVariantSelect: (variant: number | null) => void;
  prompt: string;
  negativePrompt?: string;
};

const ActionPanel = ({ onVariantSelect, prompt, negativePrompt }: ActionPanelProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);
  const [selectedPromptIds, setSelectedPromptIds] = useState<number[]>([]);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleVariantSelect = (variant: number | null) => {
    setSelectedVariant(variant); // Update local state
  };

  const handleGenerateClick = () => {
    if (selectedVariant !== null) {
      onVariantSelect(selectedVariant);
    } else {
      console.warn('no variant selected');
    }
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
    <div className="flex border-[1px] px-space-06 pt-space-06 sm:w-[30vw] max-w-[22.5rem]
     border-[#1C212A] bg-special relative min-h-screen"
    >
      <div className="flex flex-col gap-space-03 grow">
        <UpgradeNoticeCard />
        <div className="text-md text-primary font-satoshi font-system-bold">Upload</div>
        <div className="grow max-h-[194px]"><FileUploadCard /></div>
        <div><PromptSection selectedPrompts={selectedPrompts} toggleMenu={toggleMenu} displayPrompt={prompt} /></div>
        <div><NegativePromptSection displayNegativePrompt={negativePrompt} /></div>
        <div className="flex flex-col gap-space-03 justify-center">
          <div className="text-md text-primary font-satoshi font-system-bold">Variants</div>
          <VarientsButton onVariantSelect={handleVariantSelect} />
        </div>
        <div className="flex justify-center"><CustomButton onClick={handleGenerateClick} text="Generate" variant="primary" className="w-[10.81rem]" /></div>
        <div className="text-base text-[#A6A6A6] font-satoshi font-system-bold text-center">This will use 12 Jewels.</div>
      </div>
      {isMenuOpen && (
        <div className="absolute right-0 top-0 translate-x-full h-full z-[999]">
          <PromptMenu
            variant="litemodepage"
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            onSelectPrompt={handleSelectedPrompt}
            onRemovePrompt={handleRemovePrompt}
          />
        </div>
      )}
    </div>
  );
};

export default ActionPanel;
