'use client';
import { useState } from 'react';
import ImageWithIcons from '../atoms/ImageWithIcons';
import ImageCarousel from '../molecules/ImageCarousel';
import ImageViewCard from '../molecules/ImageViewCard';

type GenerateSectionProps = {
  variants: number | null;
  prompt: string;
  negativePrompt: string;
};

const TemplateModeGenerateSection = ({ variants, prompt, negativePrompt }: GenerateSectionProps) => {
  const [selectedImage, setSelectedImage] = useState('');
  const [firstImage, setFirstImage] = useState('');
  const [imageToBeDeleted, setImageToBeDeleted] = useState('');
  const [imageToView, setImageToView] = useState('');
  const [cardVisible, setCardVisible] = useState(false);

  return (
    <div className="flex flex-col h-full w-full relative">
      <div className="pt-[73px] h-2/3 flex justify-center">
        <ImageWithIcons
          handleDeletedImage={setImageToBeDeleted}
          variant="secondary"
          src={selectedImage || firstImage}
          width={745}
          height={669}
          alt="selected-image"
          className="w-fit"
          setViewingImage={setImageToView}
          setCardVisible={setCardVisible}
        />
      </div>
      <div className="flex justify-center items-center flex-1">
        <ImageCarousel variants={variants} setSelectedImage={setSelectedImage} deletedImage={imageToBeDeleted} setFirstImage={setFirstImage} />
      </div>
      {cardVisible
      && (
        <div className="absolute w-full h-full flex justify-center items-center">
          <ImageViewCard prompt={prompt} negativePrompt={negativePrompt} setCardVisible={setCardVisible} src={imageToView} />
        </div>
      )}
    </div>
  );
};

export default TemplateModeGenerateSection;
