import WelcomeCard from '@/components/atoms/WelcomeCard';
import TopBar from '@/components/molecules/TopBar';
import CenterNavBar from '@/components/organisms/CenterNavBar';
import RowPost from '@/components/organisms/RowPost';
import SideBar from '@/components/organisms/SideBar';

const EnvogueDashboard = () => {
  return (
    <div className="">
      <div className="flex flex-col bg-[#040508] h-full">
        <div><TopBar /></div>
        <div className="flex">
          <div className="w-[15vw] sm:w-fit"><SideBar /></div>
          <div className="flex flex-col justify-center pl-[19px] pr-[19px] w-full">
            <div><WelcomeCard text="Craft Your Dream Jewellery: Design the Perfect Piece" /></div>
            <div className="flex justify-center -mt-8 z-1">
              <div className="w-[60vw] sm:w-[70vw] lg:flex justify-center"><CenterNavBar /></div>
            </div>
            <div className="flex flex-col gap-[3rem] mt-[3.5rem] pl-[31px] pr-[31px]">
              <RowPost welcomeLine="Recent Files" />
              <RowPost welcomeLine="Remix From Community" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvogueDashboard;
