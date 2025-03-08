import Image from 'next/image';
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
      <div className="flex flex-col rounded-[33px] bg-special card-border px-4 pt-4 pb-12" style={{ boxShadow: '0px 0px 28px 4px #1C212A, inset 0px 0px 5.8px 0px #00000040' }}>
        <button type="button" onClick={closeCard} className="flex justify-end"><Image alt="close-vector" src="assets/icons/close-vector.svg" width={22.47} height={22.47} layout="resposnive" /></button>
        <div className="flex gap-3.5">
          <div className="flex items-center"><Image alt="image" src={src} width={464} height={554} /></div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-4">
              <ViewPrompt title="Prompt" prompt={prompt} />
              <ViewPrompt title="Negative Prompt" prompt={negativePrompt} />
              <div className="flex mt-4 gap-1.5">
                <div className="w-[100%]"><GradientBorderButton text="Download" icon="assets/icons/download-vector.svg" onClick={downloadImage} /></div>
                <div className="w-[100%]"><GradientBorderButton text="Edit" icon="assets/icons/edit-vector.svg" onClick={openEdit} /></div>
                <div className="w-[100%]"><GradientBorderButton text="Delete" icon="assets/icons/delete-vector.svg" onClick={deleteImage} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ImageViewCard;
