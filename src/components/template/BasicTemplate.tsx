import type { ReactNode } from 'react';
import TopBar from '../molecules/TopBar';
import SideBar from '../organisms/SideBar';

type BasicTemplateProps = {
  children: ReactNode;
};

const BasicTemplate = ({ children }: BasicTemplateProps) => {
  return (
    <div className="flex flex-col h-screen bg-body overflow-hidden">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <SideBar />
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BasicTemplate;
