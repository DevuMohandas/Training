type WelcomeCardProps = {
  text: string;
};

const WelcomeCard: React.FC<WelcomeCardProps> = ({ text }) => {
  return (
    <div className="flex justify-center w-full bg-gradient-to-r from-[#F28E4C]
     via-[#FF5A5E] via-[#C9649A] to-[#61A6F2]"
    >
      <div className=" w-full flex justify-center bg-gradient-to-t from-[rgba(4,5,8,0.9)] via-[rgba(4,5,8,0.5)] to-[rgba(4,5,8,0)]">
        <div className="text-[1.25rem] mt-[3.56rem] mb-[5rem] sm:mb-[6.93rem] max-w-[18.75rem] sm:text-[1.875rem] sm:max-w-[25rem] md:text-[2.25rem]
        md:max-w-[31.25rem] text-center font-bold text-[#ffffff]"
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;

// {/* <div className="absolute inset-0 bg-gradient-to-t from-[#040508E6] to-transparent opacity-90"> */}
