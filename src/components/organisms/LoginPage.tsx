'use client';
import { useLazyUserLoginQuery } from '@/redux/apiSlice';
import Image from 'next/image';
import { useState } from 'react';
// import { client } from  '../../libs/apollo-client';
// import { USER_LOGIN_QUERY } from '../../libs/queries';
import ForgotPassword from '../atoms/ForgotPassword';
import LoginButton from '../atoms/LoginButton';
import RememberMeLink from '../atoms/RememberMeLink';
import EmailBox from '../molecules/EmailBox';
import PasswordBox from '../molecules/PasswordBox';

const handleGoogleLogin = () => {
  // logic goes here
};

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [errorMessage, setErrorMessage] = useState(true);
  // const { data, error, isLoading } = useUserLoginQuery({ email, password }, { skip: !email || !password });
  const [triggerUserLogin, { data, error, isLoading }] = useLazyUserLoginQuery();

  // const handleLogin = async () => {
  //   if (!email || !password) {
  //     setError('Both Email and Password are required!');
  //     return;
  //   } else {
  //     setError(' ');
  //   };

  //   try {
  //     const { data } = await client.query({
  //       query: USER_LOGIN_QUERY,
  //       variables: {
  //         payload: {
  //           email,
  //           password,
  //         },
  //       },
  //     });

  //     if (data && data.userLogin) {
  //       console.warn('Access Token:', data.userLogin.accessToken);
  //       console.warn('Refresh Token:', data.userLogin.refreshToken);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     // setError('Invalid login credentials.');
  //   }
  // };

  const handleLogin = async () => {
    try {
      const response = await triggerUserLogin({ email, password }).unwrap();
      // console.warn(response);
      console.warn('This is try block');
      console.warn(data);
      console.warn(response);
    } catch (err) {
      console.error('Login Failed', err);
    }
  };

  return (
    <div className="">
      <div className="flex flex-col items-center w-[37rem] h-[38rem] shadow-[0px_0px_20px_0px_#3838382E] rounded-[0.94rem]">

        <div className="text-[1.31rem] font-[700] text-[#303E63] mt-[3.75rem]">Welcome to Vineo</div>
        <div className="text-[1.06rem] font-[500] text-[#394A59E5]/90 mt-[1.88rem] cursor-pointer">Login</div>

        <div className="mt-[3.508rem] "><EmailBox email={email} setEmail={setEmail} /></div>
        <PasswordBox password={password} setPassword={setPassword} />

        <div className="flex justify-between w-[23.56rem] mt-[0.56rem]">
          <div className="ml-[5px]"><RememberMeLink /></div>
          <div className="mr-[5px]"><ForgotPassword /></div>
        </div>

        {/* {error && (
          <div className="w-[23.56rem] h-[2.56rem] mt-[3px] bg-[#f5dcd8] border-amber-100 text-[#F78A79] text-500 text-sm text-center">
            'Something went wrong!'
          </div>
        )} */}

        <div className="mt-[3.587rem]"><LoginButton onClick={handleLogin} /></div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="mt-[1.313rem]
          cursor-pointer bg-transparent border-none"
        >
          <Image
            src="/assets/images/google_icon.png"
            alt="Sign in with Google"
            width={32}
            height={32}
          />
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
