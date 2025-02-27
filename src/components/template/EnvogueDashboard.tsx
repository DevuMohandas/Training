import WelcomeCard from '@/components/atoms/WelcomeCard';
import TopBar from '@/components/molecules/TopBar';
import CenterNavBar from '@/components/organisms/CenterNavBar';
import RowPost from '@/components/organisms/RowPost';
import SideBar from '@/components/organisms/SideBar';

const EnvogueDashboard = () => {
  const Recents = [
    { image: '/assets/images/Jewellery-image.png', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
    { image: '/assets/images/jewellery-image1.png', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
    { image: '/assets/images/jewellery-image2.png', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
    { image: '/assets/images/j5.svg', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
    { image: '/assets/images/j6.svg', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
  ];

  const Community = [
    { image: '/assets/images/j7.svg', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
    { image: '/assets/images/j1.svg', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
    { image: '/assets/images/j2.svg', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
    { image: '/assets/images/j3.svg', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
    { image: '/assets/images/j4.svg', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
  ];

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
          <div className="px-[2rem]">
            <div className="mt-[2.93rem]"><RowPost productList={Recents} welcomeLine="Recents" /></div>
            <div className="mt-[2.93rem]"><RowPost productList={Community} welcomeLine="Community" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvogueDashboard;
