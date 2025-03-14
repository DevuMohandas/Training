import TopBar from '../molecules/TopBar';
import EditPanel from '../organisms/EditPanel';
import SideBar from '../organisms/SideBar';
import EditmodeTemplate from '../template/EditmodeTemplate';

const EnvogueEditpanel = () => {
  return (
    <div>
      <EditmodeTemplate
        topBar={<TopBar />}
        sideBar={<SideBar />}
        editPanel={<EditPanel />}
      />
    </div>
  );
};

export default EnvogueEditpanel;
