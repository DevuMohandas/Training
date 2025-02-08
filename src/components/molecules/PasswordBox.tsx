import Image from 'next/image';
import React, { useState } from 'react';

const Password_Box = ({ password, setPassword }: { password: string; setPassword: (value: string) => void }) => {
  // const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;

  const validatePassword = (value: string) => {
    if (!value) {
      setError('Password is required.');
      return;
    };

    if (!passwordRegex.test(value)) {
      setError('Password must contain an uppercase letter, a lowercase letter, a number, and a special character.');
    }

    if (value.length < 8) {
      setError('Password must be at least 8 characters long');
    } else {
      setError('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    validatePassword(newPassword);
    setPassword(newPassword);
  };

  const toggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div className="text-[0.81rem] text-[#394A59E5]/90 font-[500] mt-[1.5rem] ml-[5px]">Password</div>
      <div className="flex items-center w-[23.56rem] h-[2.56rem] border-[1px] border-[#CFCFCF] mt-[0.31rem] rounded-[0.38rem] shadow-[0px_4px_28.1px_0px_#B2B2B240]">
        <input
          type={passwordVisible ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          className="w-[20.56rem] h-[2.56rem] rounded-[0.38rem]
          outline-none focus:border-[#b8b6b6] p-[8px]"
        />
        <Image
          src="/assets/images/eye-icon.png"
          onClick={toggleVisibility}
          alt="eye"
          width={14}
          height={12}
          className="ml-[0.938rem] cursor-pointer"
        />
      </div>
      {error && <div className="text-[#F78A79] text-xs mt-1 w-[23.56rem] ">{error}</div>}
    </div>
  );
};

export default Password_Box;
