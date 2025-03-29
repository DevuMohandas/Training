'use client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import CustomButton from '../atoms/CustomButton';
import ImageWithIcons from '../atoms/ImageWithIcons';
import VarientsButton from '../atoms/VarientsButton';
import ImageCarousel from '../molecules/ImageCarousel';
import ImageViewCard from '../molecules/ImageViewCard';
import NegativePromptSection from '../molecules/NegativePromptSection';
import ToolBar from '../molecules/ToolBar';
import ActionPanel from './ActionPanel';
import PromptSection from './PromptSection';

const EditPanel = () => {
  const [variants, setvariants] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [generate, setGenerate] = useState(false);
  const [userPrompt, setUserPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [imageToDelete, setImageToDelete] = useState('');
  const [cardVisible, setCardVisible] = useState(false);
  const [viewingImage, setViewingImage] = useState('');

  const searchParams = useSearchParams();
  const imageToEdit = searchParams.get('src');

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.warn(isMenuOpen);
  };

  return (
    <div className="flex w-full h-full">
      {(generate && variants) && <ActionPanel prompt={userPrompt} negativePrompt={negativePrompt} />}

      <div className="flex flex-col w-full relative">
        {/* Main Edit Panel */}
        <div className="flex justify-center items-center h-2/3">
          <div className="flex flex-1 justify-center items-center px-space-20 py-space-04">
            {selectedVariant
              ? (<ImageWithIcons handleDeletedImage={setImageToDelete} src={selectedVariant} setCardVisible={setCardVisible} setViewingImage={setViewingImage} variant="secondary" />)
              : imageToEdit
                ? (<Image alt="edit-image" src={imageToEdit} width={400} height={400} />)
                : null}
          </div>
          {!generate && <ToolBar />}
          {cardVisible ? <div className="absolute flex w-full h-full justify-center items-center z-10 top-space-01"><ImageViewCard setCardVisible={setCardVisible} src={viewingImage} prompt={userPrompt} negativePrompt={negativePrompt} /></div> : ''}
        </div>
        {/* End Main Edit Panel */}

        {/* Prompt Section & Generate Button */}
        {(generate && variants)
          ? (
              <div className="flex justify-center">
                <ImageCarousel imageToDelete={imageToDelete} variants={variants} setSelectedVariant={setSelectedVariant} />
              </div>
            )
          : (
              <div className="px-space-10">
                <div className="flex gap-space-03">
                  <div className="flex flex-col w-full gap-space-02">
                    <div className="h-full">
                      <PromptSection toggleMenu={toggleMenu} setUserPrompt={setUserPrompt} />
                    </div>
                    <div className="h-full">
                      <NegativePromptSection setPrompt={setNegativePrompt} />
                    </div>
                  </div>
                  <div className="flex flex-col grow gap-space-04">
                    <div className="flex flex-col min-w-[15.625rem] p-space-04 bg-card rounded-[1rem] border-1 card-border gap-space-02">
                      <div className="text-primary font-system-bold text-lg">Variants</div>
                      <VarientsButton onVariantSelect={setvariants} />
                    </div>
                    <div className="flex justify-center">
                      <CustomButton variant="primary" text="Generate" className="w-full" onClick={() => setGenerate(true)} />
                    </div>
                    <div className="text-base text-[#A6A6A6] font-satoshi font-system-bold text-center">
                      This will use 12 Jewels
                    </div>
                  </div>
                </div>
              </div>
            )}
        {/* End Prompt Section & Generate Button */}
      </div>
    </div>
  );
};

export default EditPanel;
