import { HOVER_ICONS } from '@/constants/EnvogueaiConstants';
// import { useCardVisibility } from '@/hooks/useCardVisibility';
import useDownloadImage from '@/hooks/useDownloadImage';
// import { usePopup } from '@/hooks/usePopup';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import IconButton from './IconButton';

type ImageWithIconsProps = {
  src: string;
  id: number;
  handleDeletedImage: (src: string) => void;
  variant?: 'primary' | 'secondary';
  setViewingImage: (src: string) => void;
  setCardVisible: (setCardVisible: boolean) => void;
};

const ImageWithIcons = ({ src, handleDeletedImage, variant, setViewingImage, setCardVisible }: ImageWithIconsProps) => {
  const { downloadImage } = useDownloadImage();
  const router = useRouter();

  const handleView = () => {
    setViewingImage(src);
    setCardVisible(true);
  };

  const goToEditPage = () => {
    router.push(`/envogue_editmode?src=${encodeURIComponent(src)}`);
  };

  return (
    <div className={`relative group border-1 card-border ${variant === 'primary' ? 'rounded-[1rem]' : ''} overflow-hidden`}>
      <Image
        alt="image"
        src={src}
        width={219}
        height={219}
        className="aspect-square object-cover w-full h-full"
      />
      <div className="flex justify-end p-2.5 absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex h-fit rounded-2xl gap-[1px] overflow-hidden">
          <IconButton onClick={() => downloadImage(src)} icon={HOVER_ICONS.download} alt="download" width={15.18} height={17.07} />
          <IconButton onClick={handleView} icon={HOVER_ICONS.view} alt="view" width={20.72} height={19.06} />
          <IconButton onClick={() => handleDeletedImage(src)} icon={HOVER_ICONS.delete} alt="delete" width={12.45} height={14.94} />
          <IconButton onClick={goToEditPage} icon={HOVER_ICONS.edit} alt="edit" width={14.11} height={12.09} />
        </div>
      </div>
    </div>
  );
};

export default ImageWithIcons;
