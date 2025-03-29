export const handleDownload = async (src: string) => {
  try {
    const response = await fetch(src); // Fetch the image data
    const blob = await response.blob(); // Convert response to a Blob
    const blobUrl = URL.createObjectURL(blob); // Create a temporary URL

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'downloaded-image';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error('Error downloading the Image', error);
  }
};
