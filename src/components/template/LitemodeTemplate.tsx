import React from 'react';

type LitemodeTemplateProps = {
  topBar: React.ReactNode;
  sideBar: React.ReactNode;
  actionPanel?: React.ReactNode;
  mainContent: React.ReactNode;
};

const LitemodeTemplate = ({ topBar, sideBar, actionPanel, mainContent }: LitemodeTemplateProps) => {
  return (
    <div className="bg-body h-screen flex flex-col relative">
      {topBar}
      <div className="flex flex-1 overflow-hidden">
        <div className="h-full">{sideBar}</div>
        {actionPanel && <div className="h-full">{actionPanel}</div>}
        <div className="px-12 pt-6 pb-12 flex-1 overflow-y-auto ">
          {mainContent}
        </div>
      </div>
    </div>
  );
};

export default LitemodeTemplate;

// px-12 pt-6
// {actionPanel && <div className=" overflow-x-scroll z-10 relative">{actionPanel}</div>}
// <div className="px-12 pt-6 pb-12 overflow-y-auto flex-1">
