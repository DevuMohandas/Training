type WelcomeCardProps = {
  text: string;
};

const WelcomeCard: React.FC<WelcomeCardProps> = ({ text }) => {
  return (
    <div className="relative w-full min-h-[17.625rem] flex justify-center items-center bg-gradient-to-r from-[#F28E4C] via-[#FF5A5E] via-[#C9649A] to-[#61A6F2]">
      <div className="absolute inset-0 bg-gradient-to-t from-[#040508E6] to-transparent opacity-90"></div>
      <span className="relative text-center text-white text-[1.5rem] max-w-[300px] sm:text-[2rem] sm:max-w-[483px] font-bold">
        {text}
      </span>
    </div>
  );
};

export default WelcomeCard;
