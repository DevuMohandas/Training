import WelcomeCard from '@/components/atoms/WelcomeCard';
import TopBar from '@/components/molecules/TopBar';
import CenterNavBar from '@/components/organisms/CenterNavBar';
import RowPost from '@/components/organisms/RowPost';
import SideBar from '@/components/organisms/SideBar';
import DashboardTemplate from '../template/DashboardTemplate';

const EnvogueDashboard = () => {
  const Recents = [
    { image: '/assets/images/Jewellery-image.png', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
    { image: '/assets/images/jewellery-image1.png', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
    { image: '/assets/images/jewellery-image2.png', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
    { image: '/assets/images/j5.svg', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
    { image: '/assets/images/j6.svg', description: 'Craft Your Dream Jewelry: Design the Perfect Piece' },
  ];

  return (
    <DashboardTemplate
      topBar={<TopBar />}
      welcomeCard={<WelcomeCard text="Craft Your Dream Jewellery: Design the Perfect Piece" />}
      centerNavbar={<CenterNavBar />}
      rowPost={<RowPost productList={Recents} welcomeLine="Recents" />}
      sideBar={<SideBar />}
    />
  );
};

export default EnvogueDashboard;
