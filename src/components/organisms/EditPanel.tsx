'use client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import CustomButton from '../atoms/CustomButton';
import VarientsButton from '../atoms/VarientsButton';
import NegativePromptSection from '../molecules/NegativePromptSection';
import ToolBar from '../molecules/ToolBar';
import ActionPanel from './ActionPanel';
import PromptSection from './PromptSection';
import TemplateModeGenerateSection from './TemplateModeGenerateSection';

const EditPanel = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [variant, setVariant] = useState<number | null>(null);
  const [isGenerate, setIsGenerate] = useState(false);
  const [userPrompt, setUserPrompt] = useState('');
  const [userNegativePrompt, setUserNegativePrompt] = useState('');

  const searchParams = useSearchParams();
  const imageToEdit = searchParams.get('src');

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.warn(isMenuOpen);
  };

  return (
    <div className="flex w-full h-full">
      {!isGenerate
        ? (
            <div className="flex flex-col w-full relative">
              <div className="flex justify-center items-center h-2/3">
                <div className="flex flex-1 justify-center items-center px-space-20 py-space-04">
                  <Image alt="edit-image" src={imageToEdit} width={400} height={400} />
                </div>
                <ToolBar />
              </div>
              <div className="px-space-10">
                <div className="flex gap-space-03">
                  <div className="flex flex-col w-full gap-space-02">
                    <div className="h-full">
                      <PromptSection setUserPrompt={setUserPrompt} toggleMenu={toggleMenu} />
                    </div>
                    <div className="h-full">
                      <NegativePromptSection setPrompt={setUserNegativePrompt} />
                    </div>
                  </div>
                  <div className="flex flex-col grow gap-space-04">
                    <div className="flex flex-col min-w-[15.625rem] p-space-04 bg-card rounded-[1rem] border-1 card-border gap-space-02">
                      <div className="text-primary font-system-bold text-lg">Variants</div>
                      <VarientsButton onVariantSelect={setVariant} />
                    </div>
                    <div className="flex justify-center">
                      <CustomButton variant="primary" text="Generate" className="w-full" onClick={() => setIsGenerate(true)} />
                    </div>
                    <div className="text-base text-[#A6A6A6] font-satoshi font-system-bold text-center">
                      This will use 12 Jewels
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        : (
            <div className="flex w-full h-full">
              <ActionPanel onVariantSelect={setVariant} prompt={userPrompt} negativePrompt={userNegativePrompt} />
              <TemplateModeGenerateSection prompt={userPrompt} negativePrompt={userNegativePrompt} variants={variant} />
            </div>
          )}
    </div>
  );
};

export default EditPanel;
