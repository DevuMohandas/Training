import CustomButton from '@/components/atoms/CustomButton';
import FileUploadCard from '@/components/atoms/FileUploadCard';
import VarientsButton from '@/components/atoms/VarientsButton';
import NegativePromptSection from '@/components/molecules/NegativePromptSection';
import PromptSection from '@/components/molecules/PromptSection';
import UpgradeNoticeCard from '@/components/molecules/UpgradeNoticeCard';

const ActionPanel = () => {
  return (
    <div className="flex border-[1px] max-w-[22.5rem] border-[#1C212A] pt-[28px] px-[22px] bg-gradient-to-r from-[#06090E] via-[#080D14] to-[#0C111A] h-full sm:w-[30vw]">
      <div className="flex flex-col gap-10 w-[100%]">
        <UpgradeNoticeCard />
        <div className="text-[1rem] text-[#ffffff] font-satoshi font-bold">Upload Image</div>
        <FileUploadCard />
        <PromptSection />
        <NegativePromptSection />
        <div className="text-[1rem] text-[#ffffff] font-satoshi font-bold">Variants</div>
        <div className="flex justify-center border-1"><VarientsButton /></div>
        <div className="flex justify-center"><CustomButton text="Generate" variant="primary" /></div>
        <div className="text-[0.875rem] text-[#A6A6A6] font-satoshi font-bold text-center">This will use 12 Jewels</div>
      </div>
    </div>
  );
};

export default ActionPanel;
