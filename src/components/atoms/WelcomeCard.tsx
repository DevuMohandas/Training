type WelcomeCardProps = {
  text: string;
};

const WelcomeCard: React.FC<WelcomeCardProps> = ({ text }) => {
  return (
    <div className="flex justify-center w-full bg-gradient-main">
      <div className=" w-full flex justify-center" style={{ background: 'linear-gradient(221.79deg, rgba(4, 5, 8, 0) 20.71%, rgba(4, 5, 8, 0.9) 90.33%)' }}>
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

// background: linear-gradient(90deg, #61A6F2 0%, #C9649A 32.71%, #FF5A5E 68.67%, #F28E4C 100%);
