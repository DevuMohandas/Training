import Image from 'next/image';
import { useState } from 'react';

type TextBoxWithLabelProps = {
  variant: 'text' | 'email' | 'password';
  label: string;
  type: 'filled' | 'outlined';
  error?: string;
  setValue: (value: string) => void;
  value?: string;
};

const TextBoxWithLabel = ({ variant, label, type, error, setValue, value }: TextBoxWithLabelProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col gap-[0.875rem] w-full">
      <div className="text-secondary text-md font-system-bold">{label}</div>

      <div className="relative w-full">
        {/* for email variant */}
        {variant === 'email' && (
          <Image
            src="/assets/icons/email-icon.svg"
            width={20}
            height={20}
            alt="email"
            className="absolute left-5 top-1/2 -translate-y-1/2"
          />
        )}

        {/* for password variant */}
        {variant === 'password' && (
          <>
            <Image
              src="/assets/icons/lock-icon.svg"
              width={24}
              height={24}
              alt="lock"
              className="absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer"
            />
            <button type="button" onClick={togglePasswordVisibility}>
              <Image
                src="/assets/icons/eye-icon1.svg"
                width={29}
                height={29}
                alt="eye"
                className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
              />
            </button>
          </>
        )}

        {/* Input Field */}
        <input
          type={variant === 'password' ? (showPassword ? 'text' : 'password') : variant}
          value={value}
          readOnly={variant === 'email'}
          onChange={onHandleChange}
          className={`text-primary w-full text-base font-system-bold ${type === 'filled' ? 'bg-card' : 'bg-transparent'}
          focus:outline-none border-[1px] card-border rounded-[15px] py-[19px] ${variant === 'email' && 'cursor-not-allowed'}
          ${variant === 'text' ? 'px-[21px]' : 'px-14'} `}
        />
      </div>
      {error && <p className="text-red-500 text-sm ">{error}</p>}
    </div>
  );
};

export default TextBoxWithLabel;
