import type { ReactNode } from 'react';
import LiteModeTopBar from '../molecules/LiteModeTopBar';
import SideBar from '../organisms/SideBar';

type BaseModeTemplateProps = {
  children: ReactNode;
  showSidebar?: boolean;
};

const BaseModeTemplate = ({ children, showSidebar = true }: BaseModeTemplateProps) => {
  return (
    <div className="flex flex-col h-screen">
      <LiteModeTopBar />
      <div className="flex h-full w-full">
        { showSidebar && <SideBar /> }
        <div className="h-full w-full">{children}</div>
      </div>
    </div>
  );
};

export default BaseModeTemplate;
