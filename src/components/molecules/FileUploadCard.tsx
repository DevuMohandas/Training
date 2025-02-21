import CustomButton from '../atoms/CustomButton';

const FileUploadCard = () => {
  return (
    <div className=" flex flex-col justify-center py-[59px] max-w-[313px] gap-[12px] border-2 border-dashed
     border-[#1C212A] bg-card rounded-[16px]"
    >
      <div className="text-center"><CustomButton variant="ternary" text="Upload" /></div>
      <div className="text-center text-[14px] text-secondary font-bold">Supports JPG and PNG up to 5MB</div>
    </div>
  );
};

export default FileUploadCard;
