import React from 'react';

type LitemodeTemplateProps = {
  topBar: React.ReactNode;
  sideBar: React.ReactNode;
  actionPanel: React.ReactNode;
  mainContent: React.ReactNode;
};

const LitemodeTemplate: React.FC<LitemodeTemplateProps> = ({ topBar, sideBar, actionPanel, mainContent }) => {
  return (
    <div className="bg-body">
      {topBar}
      <div className="flex h-[100%]">
        <div className="h-[100%]">{sideBar}</div>
        <div>{actionPanel}</div>
        <div className="px-[3rem] pt-[1.3125rem] w-[100%]">
          {mainContent}
        </div>
      </div>
    </div>
  );
};

export default LitemodeTemplate;
