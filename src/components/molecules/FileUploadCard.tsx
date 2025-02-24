import CustomButton from '../atoms/CustomButton';

const FileUploadCard = () => {
  return (
    <div className=" flex flex-col justify-center py-[3.688rem] max-w-[19.563rem] gap-[0.75rem] border-2 border-dashed
     card-border bg-card rounded-[1rem]"
    >
      <div className="text-center"><CustomButton variant="ternary" text="Upload" /></div>
      <div className="text-center text-[0.875rem] text-secondary font-bold">Supports JPG and PNG up to 5MB</div>
    </div>
  );
};

export default FileUploadCard;
