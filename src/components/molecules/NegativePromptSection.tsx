import Image from 'next/image';

const NegativePromptSection = () => {
  return (
    <div className="flex  bg-[#10151F] border-[1px] py-[0.5rem] pl-[0.75rem]
      border-[#1C212A] rounded-[16px] max-w-[19.56rem]"
    >
      <div className="flex justify-center items-center gap-2">
        <button type="button">
          <Image alt="vector" src="assets/icons/Vector.svg" width={7.13} height={12.97} />
        </button>
        <div className="text-satoshi text-[#ffffff] text-[1rem] font-bold">Negative Prompt</div>
      </div>
    </div>
  );
};

export default NegativePromptSection;
