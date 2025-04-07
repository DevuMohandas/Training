import { Button } from '@mui/material';
import { useRef } from 'react';

type FileUploadProps = {
  setUploadedImage: (src: string) => void;
  label: string;
  variant: 'primary' | 'secondary';
};

const FileUploadElement = ({ setUploadedImage, label, variant }: FileUploadProps) => {
  const FileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  const handleButtonClick = () => {
    FileInputRef.current?.click();
  };

  return (
    <div>
      <Button
        onClick={handleButtonClick}
        sx={{
          width: '100%',
          height: '100%',
          textTransform: 'none',
          ...(variant === 'primary'
            ? {

              }
            : {
                'background': 'linear-gradient(33.04deg, #06090E 40.12%, #0C111A 80%)',
                'fontSize': '12px',
                'fontWeight': '400',
                'color': '#F9F9F9',
                'border': '1px solid #1C212A',
                '&:hover': { backgroundColor: '#E67E3A' },
              }
          ),
        }}
      >
        {label}
      </Button>
      <input
        type="file"
        ref={FileInputRef}
        className="hidden"
        onChange={handleFileChange}
        accept="image/*"
      />
    </div>
  );
};

export default FileUploadElement;
