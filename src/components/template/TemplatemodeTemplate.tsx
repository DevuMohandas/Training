import BaseModeTemplate from './BaseModeTemplate';

type TemplatemodeTemplateProps = {
  animationCard: React.ReactNode;
  templateSection: React.ReactNode;
};

const TemplatemodeTemplate = ({ animationCard, templateSection }: TemplatemodeTemplateProps) => {
  return (
    <BaseModeTemplate>
      <div className="flex flex-col h-screen bg-body">
        <div className="h-[20.75rem]">{animationCard}</div>
        <div className="flex-1 px-space-16 overflow-auto -mt-[5.875rem] scrollbar-hide">
          {templateSection}
        </div>
      </div>
    </BaseModeTemplate>
  );
};

export default TemplatemodeTemplate;

// {/* <div
//           className="absolute top-[14rem] left-0 w-full h-16 pointer-events-none z-10"
//           style={{
//             background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
//           }}
//         ></div> */}
