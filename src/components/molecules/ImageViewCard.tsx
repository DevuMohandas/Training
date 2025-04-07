import useDownloadImage from '@/hooks/useDownloadImage';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { HOVER_ICONS } from '../../constants/EnvogueaiConstants';
import GradientBorderButton from '../atoms/GradientBorderButton';
import ViewPrompt from '../atoms/ViewPrompt';

type ImageViewCardProps = {
  src: string;
  prompt: string;
  negativePrompt: string;
  handleDeletedImage?: (deletedSrc: string) => void;
  setCardVisible: (setCardVisible: boolean) => void;
};

const ImageViewCard: React.FC<ImageViewCardProps> = ({ src, prompt, negativePrompt, handleDeletedImage, setCardVisible }) => {
  const { downloadImage } = useDownloadImage();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setCardVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside); // Triggers when mouse button is pressed down

    return () => { // ensures that when component unmounts (or when isMenuOpen becomes false), the event listener is removed.
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setCardVisible]);

  const deleteImage = () => {
    if (handleDeletedImage) {
      handleDeletedImage(src);
      // closeCard();
    }
  };

  const handleCloseCard = () => {
    setCardVisible(false);
  };

  return (
    <div ref={cardRef} className="flex flex-col rounded-radius-4xl bg-special border-2 card-border px-space-04 pt-space-04 pb-space-12 shadow-[0px_0px_20px_4px_rgba(28,33,42,0.7)] max-w-[58.75rem]">
      <button type="button" onClick={handleCloseCard} className="flex justify-end"><Image alt="close-vector" src="/assets/icons/close-vector.svg" width={22.47} height={22.47} /></button>
      <div className="flex gap-space-04">
        <div className="flex items-center rounded-radius-xl overflow-hidden max-w-[28.75rem] aspect-[5/6] relative">
          <Image alt="image" src={src} width={464} height={554} className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-space-04 pr-space-02">
            <ViewPrompt title="Prompt" prompt={prompt} />
            <ViewPrompt title="Negative Prompt" prompt={negativePrompt} />
            <div className="flex justify-center mt-space-04 gap-space-02">
              <div className=" w-full max-w-32"><GradientBorderButton text="Download" icon={HOVER_ICONS.download} onClick={() => downloadImage(src)} /></div>
              <div className="w-full max-w-32"><GradientBorderButton text="Edit" icon={HOVER_ICONS.edit} /></div>
              <div className="w-full max-w-32"><GradientBorderButton text="Delete" icon={HOVER_ICONS.delete} onClick={deleteImage} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageViewCard;
