import WelcomeCard from '@/components/atoms/WelcomeCard';
import CenterNavBar from '@/components/organisms/CenterNavBar';
import RowPost from '@/components/organisms/RowPost';
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
      welcomeCard={<WelcomeCard text="Craft Your Dream Jewellery: Design the Perfect Piece" />}
      centerNavbar={<CenterNavBar />}
      rowPost={<RowPost productList={Recents} welcomeLine="Recents" />}
    />
  );
};

export default EnvogueDashboard;

// improve rowpost to rowpost section to recieve multiple rowposts.
