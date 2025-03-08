import React from 'react';

type LitemodeTemplateProps = {
  topBar: React.ReactNode;
  sideBar: React.ReactNode;
  actionPanel?: React.ReactNode;
  mainContent: React.ReactNode;
  editMode?: boolean;
  editPanel: React.ReactNode;
};

const LitemodeTemplate: React.FC<LitemodeTemplateProps> = ({ topBar, sideBar, actionPanel, mainContent, editMode, editPanel }) => {
  return (
    <div className="bg-body min-h-screen">
      {topBar}
      <div className="flex min-h-screen">
        {sideBar}
        {editMode
          ? (
              <div className="w-[100%]">{editPanel}</div>
            )
          : (
              <>
                {actionPanel}
                <div className="px-[3rem] pt-[1.3125rem] w-[100%]">
                  {mainContent}
                </div>
              </>
            )}
      </div>
    </div>
  );
};

export default LitemodeTemplate;
