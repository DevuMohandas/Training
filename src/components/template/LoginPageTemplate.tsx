import Image from 'next/image';
import LoginPage from '../organisms/LoginPage';

const LoginPageTemplate = () => {
  return (
    <div className="">
      <Image
        src="/assets/images/vineo_logo.png"
        alt="vineo-logo"
        width={130}
        height={38}
        className="mt-[2.93rem] ml-[2.75rem]"
      />
      <div className="flex ">
        <div
          className=" bg-amber-200 bg-cover w-[40rem] h-[40rem] "
          style={{ backgroundImage: 'url("/assets/images/glass_bottle.png")' }}
        >
        </div>
        <div className="bg-blue-300"><LoginPage /></div>
      </div>
    </div>
  );
};

export default LoginPageTemplate;

// {/* <div className="flex flex-col-reverse md:flex-row">
//         <div
//           className=" shrink-0 h-[45rem] w-[45rem] bg-cover bg-no-repeat bg-amber-100 md:w-1/2 "
//           style={{ backgroundImage: 'url("/assets/images/glass_bottle.png")' }}
//         >
//         </div>
//         <div className="ml-[28rem] md:ml-0 shrink">
//           <LoginPage />
//         </div>
//       </div> */}
