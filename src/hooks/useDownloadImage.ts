import { handleDownload } from '@/utils/ImageUtils';
import { useState } from 'react';

const useDownloadImage = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadImage = async (src: string) => {
    try {
      setIsDownloading(true);
      await handleDownload(src);
    } catch (error) {
      console.error('Failed to Download Image', error);
    } finally {
      setIsDownloading(false);
    }
  };
  return { downloadImage, isDownloading };
};

export default useDownloadImage;
