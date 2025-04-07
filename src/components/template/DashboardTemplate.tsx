import React from 'react';
import BasicTemplate from './BasicTemplate';

type DashboardTemplateProps = {
  welcomeCard: React.ReactNode;
  centerNavbar: React.ReactNode;
  rowPost: React.ReactNode;
};

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ welcomeCard, centerNavbar, rowPost }) => {
  return (
    <BasicTemplate>
      <div className="flex flex-col w-full px-space-04">
        {welcomeCard}
        <div className="-mt-space-12 flex justify-center">{centerNavbar}</div>
        <div className="pt-space-12 px-space-08">
          {rowPost}
        </div>
      </div>
    </BasicTemplate>
  );
};

export default DashboardTemplate;
