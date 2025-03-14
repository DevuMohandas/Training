import { HOVER_ICONS } from '@/constants/EnvogueaiConstants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import IconButton from './IconButton';

type ImageWithIconsProps = {
  src: string;
  setCardVisibility: (cardVisible: boolean) => void;
  setViewingImage: (src: string) => void;
  handleDeletedImage: (src: string) => void;
  setEditMode: (setEditMode: boolean) => void;
  handleDownload: (src: string) => void;
};

const ImageWithIcons = ({ src, setCardVisibility, setViewingImage, handleDeletedImage, handleDownload }: ImageWithIconsProps) => {
  const router = useRouter();
  const handleView = () => {
    setCardVisibility(true);
    setViewingImage(src);
  };

  const goToEditPage = () => {
    router.push(`/envogue_editmode?src=${encodeURIComponent(src)}`);
  };

  return (
    <div className="relative group border-1 card-border rounded-[1rem] overflow-hidden">
      <Image
        alt="image"
        src={src}
        width={219}
        height={219}
        layout="responsive"
        className="aspect-square object-cover"
      />
      <div className="flex justify-end p-2.5 absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex h-fit rounded-2xl gap-[1px] overflow-hidden">
          <IconButton onClick={() => handleDownload(src)} icon={HOVER_ICONS.download} alt="download" width={15.18} height={17.07} />
          <IconButton onClick={handleView} icon={HOVER_ICONS.view} alt="view" width={20.72} height={19.06} />
          <IconButton onClick={() => handleDeletedImage(src)} icon={HOVER_ICONS.delete} alt="delete" width={12.45} height={14.94} />
          <IconButton onClick={goToEditPage} icon={HOVER_ICONS.edit} alt="edit" width={14.11} height={12.09} />
        </div>
      </div>
    </div>
  );
};

export default ImageWithIcons;
