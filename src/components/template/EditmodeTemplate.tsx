import BaseModeTemplate from './BaseModeTemplate';

type EditmodeTemplateProps = {
  topBar: React.ReactNode;
  sideBar: React.ReactNode;
  editPanel: React.ReactNode;
};

const EditmodeTemplate = ({ editPanel }: EditmodeTemplateProps) => {
  return (
    <BaseModeTemplate>
      <div className="h-full bg-body">
        {editPanel}
      </div>
    </BaseModeTemplate>
  );
};

export default EditmodeTemplate;
