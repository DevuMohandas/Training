type WelcomeCardProps = {
  text: string;
};

const WelcomeCard: React.FC<WelcomeCardProps> = ({ text }) => {
  return (
    <div className="flex justify-center w-full bg-gradient-to-r from-[#F28E4C]
     via-[#FF5A5E] via-[#C9649A] to-[#61A6F2] py-[3.43rem]"
    >
      <div className="text-[20px] max-w-[300px] sm:text-[30px] sm:max-w-[400px] md:text-[36px] md:max-w-[500px] text-center font-bold text-[#ffffff]">
        {text}
      </div>
    </div>
  );
};

export default WelcomeCard;

// {/* <div className="absolute inset-0 bg-gradient-to-t from-[#040508E6] to-transparent opacity-90"> */}
