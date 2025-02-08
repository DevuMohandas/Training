const Login = () => {
  return (
    <div>
      <div className="w-[36.9rem] h-[36.44rem] shadow-[2px_2px_40.3px_0px_#3838382E] rounded-[0.94rem] flex flex-col items-center">
        <div className="text-[1.31rem] font-[700] text-[#303E63] mt-[3.75rem]">Welcome to Vineo</div>
        <div className="text-[1.06rem] font-[500] text-[#394A59E5]/90 mt-[1.88rem] cursor-pointer">Login</div>

        <div>
          <div className="text-[0.81rem] text-[#394A59E5]/90 font-[500] mt-[2.81rem]">Email</div>
          <input type="text" className="w-[23.56rem] h-[2.56rem] rounded-[0.38rem] outline-none border-[1px] border-[#CFCFCF] focus:border-[#b8b6b6] shadow-[0px_4px_28.1px_0px_#B2B2B240] mt-[0.19rem]" />
        </div>

        <div>
          <div className="text-[0.81rem] text-[#394A59E5]/90 font-[500] mt-[1.5rem]">Password</div>
          <div>
            <input type="password" className="w-[23.56rem] h-[2.56rem] rounded-[0.38rem] outline-none border-[1px] border-[#CFCFCF] focus:border-[#b8b6b6] shadow-[0px_4px_28.1px_0px_#B2B2B240] mt-[0.31rem]" />
            {/* <img src="/assets/images/eye-icon.png" alt="eye" /> */}
          </div>
          <div className="text-[0.53rem] font-[400] text-[#303E63] mt-[0.56rem] cursor-pointer">Remember Me</div>
        </div>

        <div className="flex justify-end w-[23.56rem]">
          <div className="text-[0.53rem] font-[400] text-[#303E63] cursor-pointer">Have you forgotten your password?</div>
        </div>

        <div>
          <button type="submit" className="w-[23.56rem] h-[2.56rem] mt-[3.56rem] leading-[0.63rem] bg-[#F78A79] rounded-[0.38rem] font-sans text-[#FFFFFFE5]/90 font-[700] cursor-pointer active:scale-101">Login</button>
        </div>

        <div>
          <img className="w-[2.03rem] h-[2.03rem] mt-[1.31rem] cursor-pointer" src="/assets/images/google_icon.png" alt="Google login icon" />
        </div>
      </div>
    </div>
  );
};

export default Login;
