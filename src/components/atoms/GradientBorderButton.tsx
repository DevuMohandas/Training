import Image from 'next/image';

type GradientBorderButtonProps = {
  text: string | React.ReactNode;
  icon?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
};

const GradientBorderButton = ({ text, onClick, icon, variant, className }: GradientBorderButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-gradient-main p-[1px] cursor-pointer relative rounded-radius-s ${className}`}
    >
      <div
        className={`w-full h-full text-primary text-sm new-md:text-sm rounded-radius-s
          font-bold flex justify-center items-center gap-space-01 px-space-02 transition-colors duration-300
          ${variant === 'primary'
      ? 'bg-card'
      : 'bg-body'}
      `}
      >
        {icon && <Image alt="icon" src={icon} width={12} height={12} />}
        {text}
      </div>
    </button>
  );
};

export default GradientBorderButton;

// ? 'ternary-btn-color rounded-radius-xl'
// make radius, width and height dynamic based on class recieved.
// h-[3.25rem] for secondary(removed)
// recieve custom classes as props
// ${variant === 'secondary' ? 'rounded-radius-xl' : 'rounded-radius-s'} ${width} ${height}
