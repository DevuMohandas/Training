import SideBar from '../organisms/SideBar';
import WineCard from '../organisms/WineCard';

const DashboardTemplate = () => {
  return (
    <div className="flex">
      <SideBar />
      <WineCard />
    </div>
  );
};

export default DashboardTemplate;
