import Image from 'next/image';
import { HOVER_ICONS } from '../../constants/EnvogueaiConstants';
import GradientBorderButton from '../atoms/GradientBorderButton';
import ViewPrompt from '../atoms/ViewPrompt';

type ImageViewCardProps = {
  src: string;
  prompt: string;
  negativePrompt: string;
  setCardVisibility: (cardVisible: boolean) => void;
  handleDeletedImage?: (deletedSrc: string) => void;
  setEditMode: (setEditMode: boolean) => void;
  handleDownload: (src: string) => void;
};

const ImageViewCard: React.FC<ImageViewCardProps> = ({ src, prompt, negativePrompt, setCardVisibility, handleDeletedImage, setEditMode, handleDownload }) => {
  const closeCard = () => {
    setCardVisibility(false);
  };

  const deleteImage = () => {
    if (handleDeletedImage) {
      handleDeletedImage(src);
      closeCard();
    }
  };

  const openEdit = () => {
    setEditMode(true);
  };

  const downloadImage = () => {
    handleDownload(src);
  };

  return (
    (
      <div className="flex flex-col rounded-[2.0625rem] bg-special border-2 card-border px-4 pt-4 pb-12 shadow-[0px_0px_20px_4px_rgba(28,33,42,0.7)] max-w-[58.75rem]">
        <button type="button" onClick={closeCard} className="flex justify-end"><Image alt="close-vector" src="assets/icons/close-vector.svg" width={22.47} height={22.47} /></button>
        <div className="flex gap-3.5">
          <div className="flex items-center rounded-2xl overflow-hidden max-w-[28.75rem] aspect-[5/6] relative">
            <Image alt="image" src={src} width={464} height={554} className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-4 pr-2">
              <ViewPrompt title="Prompt" prompt={prompt} />
              <ViewPrompt title="Negative Prompt" prompt={negativePrompt} />
              <div className="flex justify-center mt-4 gap-1.5">
                <div className=" w-full max-w-32"><GradientBorderButton text="Download" icon={HOVER_ICONS.download} onClick={downloadImage} /></div>
                <div className="w-full max-w-32"><GradientBorderButton text="Edit" icon={HOVER_ICONS.edit} onClick={openEdit} /></div>
                <div className="w-full max-w-32"><GradientBorderButton text="Delete" icon={HOVER_ICONS.delete} onClick={deleteImage} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ImageViewCard;

// style={{ boxShadow: '0px 0px 28px 4px #1C212A, inset 0px 0px 5.8px 0px #00000040' }}
