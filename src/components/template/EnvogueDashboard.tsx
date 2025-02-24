import WelcomeCard from '@/components/atoms/WelcomeCard';
import TopBar from '@/components/molecules/TopBar';
import CenterNavBar from '@/components/organisms/CenterNavBar';
import RowPost from '@/components/organisms/RowPost';
import SideBar from '@/components/organisms/SideBar';

const EnvogueDashboard = () => {
  return (
    <div className="bg-[#040508]">
      <div><TopBar /></div>
      <div className="flex">
        <div><SideBar /></div>
        <div className="flex flex-col w-[100%] md:px-[1.125rem]">
          <div><WelcomeCard text="Craft Your Dream Jewellery: Design the Perfect Piece" /></div>
          <div className="-mt-10 flex justify-center w-full">
            <div className=""><CenterNavBar /></div>
          </div>
          <div className="mt-[2.93rem] px-[2rem]"><RowPost welcomeLine="Recents" /></div>
        </div>
      </div>
    </div>
  );
};

export default EnvogueDashboard;
