import BasicTemplate from './BasicTemplate';

type ProfilemodeTemplateProps = {
  headerSection: React.ReactNode;
  formSection: React.ReactNode;
};

const ProfilemodeTemplate = ({ headerSection, formSection }: ProfilemodeTemplateProps) => {
  return (
    <BasicTemplate>
      <div className="flex flex-col h-full">
        {headerSection}
        <div className=" flex flex-col flex-1 py-space-03">{formSection}</div>
      </div>
    </BasicTemplate>
  );
};

export default ProfilemodeTemplate;
