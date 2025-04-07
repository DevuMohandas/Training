'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import CustomButton from '../atoms/CustomButton';

const FileUploadCard = () => {
  const FileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = React.useState<string | null>(null);
  // const [error, setError] = React.useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        // setError
        // return;
      }
      if (file.size > 5 * 1024 * 1024) {
        // alert('File size exceeds 5MB');
        // return;
      }
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  const handleUploadClick = () => {
    FileInputRef.current?.click();
    console.warn('Upload button clicked');
  };

  return (
    <div className="flex justify-center items-center gap-space-03 border-2 border-dashed
     card-border bg-card rounded-radius-xl h-full px-space-01"
    >
      {preview
        ? (
            <div className="rounded-radius-xl max-w-[15.062rem] max-h-[8.75rem] overflow-hidden">
              <Image src={preview} alt="preview" width={241} height={140} />
            </div>
          )
        : (
            <div className="flex flex-col gap-space-03">
              <input
                type="file"
                ref={FileInputRef}
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
              />
              <div className="flex justify-center px-space-02"><CustomButton variant="upload" text="Upload" onClick={handleUploadClick} className="w-full max-w-[8.875rem] rounded-radius-xl" /></div>
              <div className="text-center text-base text-secondary font-system-bold">Supports JPG and PNG up to 5MB</div>
            </div>
          )}
    </div>
  );
};

export default FileUploadCard;
