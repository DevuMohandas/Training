import Image from 'next/image';

const dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/assets/images/vineo_logo.png"
        alt="vineo-logo"
        width={130}
        height={38}
      />
      <div className="text-blue-950">Welcome to DashBoard</div>
    </div>
  );
};

export default dashboard;
