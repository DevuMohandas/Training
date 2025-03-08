'use client';
import CustomButton from '@/components/atoms/CustomButton';
import FileUploadCard from '@/components/molecules/FileUploadCard';
import NegativePromptSection from '@/components/molecules/NegativePromptSection';
import PromptSection from '@/components/organisms/PromptSection';
import { useState } from 'react';
import VarientsButton from '../atoms/VarientsButton';
import PromptMenu from '../molecules/PromptMenu';
import UpgradeNoticeCard from '../molecules/UpgradeNoticeCard';

type ActionPanelProps = {
  onVariantSelect: (variant: number | null) => void;
};

const ActionPanel: React.FC<ActionPanelProps> = ({ onVariantSelect }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [removedPrompt, setRemovedPrompt] = useState<string | null>(null);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleVariantSelect = (variant: number | null) => {
    setSelectedVariant(variant); // Update local state
  };

  const handleClick = () => {
    if (selectedVariant !== null) {
      onVariantSelect(selectedVariant);
    } else {
      console.warn('no variant selected');
    }
  };

  return (
    <div className="flex border-[1px] max-w-[22.5rem] xl:px-[22px] xl:pt-[28px]
    bg-amber-200
    max-h-screen overflow-y-auto scrollbar-hide border-[#1C212A] bg-special relative"
    >
      <div className="flex flex-col sm:gap-3 lg:gap-10 w-[100%]">
        <UpgradeNoticeCard />
        <div className="text-[1rem] text-primary font-satoshi font-bold">Upload Image</div>
        <FileUploadCard />
        <div><PromptSection toggleMenu={toggleMenu} selectedPrompt={selectedPrompt} removedPrompt={removedPrompt} /></div>
        <div><NegativePromptSection /></div>
        <div className="text-[1rem] text-primary font-satoshi font-bold">Variants</div>
        <div className="flex justify-center">
          <VarientsButton onVariantSelect={handleVariantSelect} />
        </div>
        <div className="flex justify-center"><CustomButton onClick={handleClick} text="Generate" variant="primary" className="w-[10.81rem]" /></div>
        <div className="text-[0.875rem] text-[#A6A6A6] font-satoshi font-bold text-center">This will use 12 Jewels</div>
      </div>
      <div className="absolute top-[72px] z-999">
        {isMenuOpen && <PromptMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} onSelectPrompt={setSelectedPrompt} onRemovePrompt={setRemovedPrompt} />}
      </div>
    </div>
  );
};

export default ActionPanel;

// bg-gradient-to-r from-[#06090E] via-[#080D14] to-[#0C111A]
// sm:w-[30vw]
// <div className="flex border-[1px] max-h-screen overflow-y-auto scrollbar-hide
// border-[#1C212A] px-[22px] bg-special relative"
