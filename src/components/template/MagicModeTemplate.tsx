import BasicTemplate from './BasicTemplate';

type MagicModeProps = {
  cardSection: React.ReactNode;
};

const MagicModeTemplate = ({ cardSection }: MagicModeProps) => {
  return (
    <BasicTemplate>
      {cardSection}
    </BasicTemplate>
  );
};

export default MagicModeTemplate;
