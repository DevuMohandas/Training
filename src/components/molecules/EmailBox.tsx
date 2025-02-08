import React, { useState } from 'react';

const EmailBox = ({ email, setEmail }: { email: string; setEmail: (value: string) => void }) => {
  // const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const validateEmail = (value: string) => {
    if (!value) {
      setError('Please enter a valid email address.');
      return false;
    };

    const emailRegex = /^[\w.%+-]+@[\w.-]+\.\w{2,}$/;
    if (!emailRegex.test(value)) {
      setError('Please enter a valid email address.');
      return false;
    }

    setError('');
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    validateEmail(newEmail);
    setEmail(newEmail);
  };

  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-[0.81rem] text-[#394A59E5]/90 font-[500] ml-[5px]">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="w-[23.56rem] h-[2.56rem] rounded-[0.38rem] p-[8px]
          outline-none border-[1px] border-[#CFCFCF] focus:border-[#b8b6b6] shadow-[0px_4px_28.1px_0px_#B2B2B240] mt-[0.19rem]"
        />
        {error && <div className="text-[#F78A79] text-500 text-sm mt-1">{error}</div>}
      </div>
    </div>
  );
};

export default EmailBox;

// import React from 'react';

// const EmailBox = ({ email, setEmail }: { email: string; setEmail: (value: string) => void }) => {
//   const [error, setError] = React.useState<string>('');

//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const validateEmail = () => {
//     if (!email) {
//       setError('Please enter valid email address.');
//       return false;
//     }

//     const emailRegex = /^[\w.%+-]+@[\w.-]+\.\w{2,}$/;
//     if (!emailRegex.test(email)) {
//       setError('Please enter a valid email address.');
//       return false;
//     }

//     setError('');
//     return true;
//   };

//   return (
//     <div>
//       <div className="flex flex-col">
//         <label htmlFor="email" className="text-[0.81rem] text-[#394A59E5]/90 font-[500] ml-[5px]">
//           Email
//         </label>
//         <input
//           type="email"
//           value={email}
//           onChange={handleEmailChange}
//           onBlur={validateEmail}
//           className="w-[23.56rem] h-[2.56rem] rounded-[0.38rem] p-[8px]
//           outline-none border-[1px] border-[#CFCFCF] focus:border-[#b8b6b6] shadow-[0px_4px_28.1px_0px_#B2B2B240] mt-[0.19rem]"
//         />
//         {error && <div className="text-[#F78A79] text-500 text-sm mt-1">{error}</div>}
//       </div>
//     </div>
//   );
// };

// export default EmailBox;
