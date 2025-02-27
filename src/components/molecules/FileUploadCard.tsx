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
    <div className="flex justify-center items-center max-w-[19.563rem] h-[12.125rem] gap-[0.75rem] border-2 border-dashed
     card-border bg-card rounded-[1rem]"
    >
      {preview
        ? (
            <div className="rounded-[0.416rem] max-w-[15.062rem] h-[8.75rem] overflow-hidden">
              <Image src={preview} alt="preview" width={241} height={140} />
            </div>
          )
        : (
            <div className="flex flex-col gap-[0.75rem]">
              <input
                type="file"
                ref={FileInputRef}
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
              />
              <div className="text-center"><CustomButton variant="ternary" text="Upload" onClick={handleUploadClick} /></div>
              <div className="text-center text-[0.875rem] text-secondary font-bold">Supports JPG and PNG up to 5MB</div>
            </div>
          )}
    </div>
  );
};

export default FileUploadCard;

// py-[3.688rem]
