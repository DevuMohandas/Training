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

const ActionPanel = ({ onVariantSelect }: ActionPanelProps) => {
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

  const handleGenerateClick = () => {
    if (selectedVariant !== null) {
      onVariantSelect(selectedVariant);
    } else {
      console.warn('no variant selected');
    }
  };

  return (
    <div className="flex border-[1px] px-5 pt-7 sm:w-[30vw] max-w-[360px]
     border-[#1C212A] bg-special relative min-h-screen"
    >
      <div className="flex flex-col gap-3 grow">
        <UpgradeNoticeCard />
        <div className="text-[1rem] text-primary font-satoshi font-bold">Upload Image</div>
        <div className="grow max-h-[194px]"><FileUploadCard /></div>
        <div><PromptSection toggleMenu={toggleMenu} selectedPrompt={selectedPrompt} removedPrompt={removedPrompt} /></div>
        <div><NegativePromptSection /></div>
        <div className="flex flex-col gap-3 justify-center">
          <div className="text-[1rem] text-primary font-satoshi font-bold">Variants</div>
          <VarientsButton onVariantSelect={handleVariantSelect} />
        </div>
        <div className="flex justify-center"><CustomButton onClick={handleGenerateClick} text="Generate" variant="primary" className="w-[10.81rem]" /></div>
        <div className="text-[0.875rem] text-[#A6A6A6] font-satoshi font-bold text-center">This will use 12 Jewels</div>
      </div>
      {isMenuOpen && (
        <div className="absolute right-0 top-0 translate-x-full h-full z-[999]">
          <PromptMenu
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            onSelectPrompt={setSelectedPrompt}
            onRemovePrompt={setRemovedPrompt}
          />
        </div>
      )}
    </div>
  );
};

export default ActionPanel;
