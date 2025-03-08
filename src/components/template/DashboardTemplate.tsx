import React from 'react';

type DashboardTemplateProps = {
  topBar: React.ReactNode;
  sideBar: React.ReactNode;
  welcomeCard: React.ReactNode;
  centerNavbar: React.ReactNode;
  rowPost: React.ReactNode;
};

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ topBar, sideBar, welcomeCard, centerNavbar, rowPost }) => {
  return (
    <div className="bg-[#040508] min-h-screen">
      <div>{topBar}</div>
      <div className="flex flex-grow bg-amber-100">
        <div>{sideBar}</div>
        <div className="flex flex-col w-[100%] md:px-[1.125rem]">
          <div>{welcomeCard}</div>
          <div className="-mt-10 flex justify-center w-full">
            <div className="">{centerNavbar}</div>
          </div>
          <div className="px-[2rem]">
            <div className="mt-[2.93rem]">{rowPost}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTemplate;
