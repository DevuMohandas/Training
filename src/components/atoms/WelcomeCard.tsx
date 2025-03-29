type WelcomeCardProps = {
  text: string;
};

const WelcomeCard = ({ text }: WelcomeCardProps) => {
  return (
    <div className="flex justify-center w-full bg-gradient-main relative">
      <div className="w-full h-full flex justify-center bg-custom-gradient">
        <div className="text-xl mt-space-14 mb-space-20 new-sm:mb-space-28 max-w-[18.75rem] new-sm:text-3xl sm:max-w-[30rem] new-md:text-4xl
          md:max-w-[31.25rem] text-center font-system-bold text-[#ffffff] font-merriweather leading-huge"
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
