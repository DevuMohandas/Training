import Image from 'next/image';
import React from 'react';

type ImageWithIconsProps = {
  src: string;
  setCardVisibility: (cardVisible: boolean) => void;
  setViewingImage: (src: string) => void;
  handleDeletedImage: (src: string) => void;
  setEditMode: (setEditMode: boolean) => void;
  handleDownload: (src: string) => void;
};

const ImageWithIcons: React.FC<ImageWithIconsProps> = ({ src, setCardVisibility, setViewingImage, handleDeletedImage, setEditMode, handleDownload }) => {
  const handleView = () => {
    setCardVisibility(true);
    setViewingImage(src);
  };

  const handleDelete = () => {
    handleDeletedImage(src);
  };

  const handleEditMode = () => {
    setEditMode(true);
  };

  const handleDownloadImage = () => {
    handleDownload(src);
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
          <button type="button" onClick={handleDownloadImage} className="p-1 cursor-pointer bg-white/10 w-[38.41px] h-[31.4px] flex justify-center"><Image alt="download" src="assets/icons/download-vector.svg" width={15.18} height={17.07} /></button>
          <button type="button" onClick={handleView} className="p-1 cursor-pointer bg-white/10 w-[38.41px] h-[31.4px] flex justify-center"><Image alt="download" src="assets/icons/view-vector.svg" width={20.72} height={19.06} /></button>
          <button type="button" onClick={handleDelete} className="p-1 cursor-pointer bg-white/10 w-[38.41px] h-[31.4px] flex justify-center"><Image alt="download" src="assets/icons/delete-vector.svg" width={12.45} height={14.94} /></button>
          <button type="button" onClick={handleEditMode} className="p-1 bg-white/10 cursor-pointer w-[38.41px] h-[31.4px] flex justify-center"><Image alt="download" src="assets/icons/edit-vector.svg" width={14.11} height={12.09} /></button>
        </div>
      </div>
    </div>
  );
};

export default ImageWithIcons;
