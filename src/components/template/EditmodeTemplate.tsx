type EditmodeTemplateProps = {
  topBar: React.ReactNode;
  sideBar: React.ReactNode;
  editPanel: React.ReactNode;
};

const EditmodeTemplate = ({ topBar, sideBar, editPanel }: EditmodeTemplateProps) => {
  return (
    <div className="bg-body min-h-screen">
      {topBar}
      <div className="flex w-full">
        {sideBar}
        {editPanel}
      </div>
    </div>
  );
};

export default EditmodeTemplate;
