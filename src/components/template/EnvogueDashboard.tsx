import WelcomeCard from '@/components/atoms/WelcomeCard';
import TopBar from '@/components/molecules/TopBar';
// import CenterNavBar from '@/components/organisms/CenterNavBar';
import RowPost from '@/components/organisms/RowPost';
import SideBar from '@/components/organisms/SideBar';

const EnvogueDashboard = () => {
  return (
    <div className="bg-[#040508]">
      <div><TopBar /></div>
      <div className="flex">
        <div><SideBar /></div>
        <div className="flex flex-col w-[100vw] md:px-[18px]">
          <div><WelcomeCard text="Craft Your Dream Jewelry: Design the Perfect Piece" /></div>
          {/* <div className="w-full -mt-3"><CenterNavBar /></div> */}
          <div className="mt-[2.93rem] px-[2rem]"><RowPost welcomeLine="Recents" /></div>
        </div>
      </div>
    </div>
  );
};

export default EnvogueDashboard;
