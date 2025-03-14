'use client';
import { useState } from 'react';
import LiteModeTopBar from '../molecules/LiteModeTopBar';
import ActionPanel from '../organisms/ActionPanel';
// import EditPanel from '../organisms/EditPanel';
import MainContent from '../organisms/MainContent';
import SideBar from '../organisms/SideBar';
import LitemodeTemplate from '../template/LitemodeTemplate';

const EnvogueLitemode = () => {
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);

  const handleVariantSelection = (variant: number | null) => {
    setSelectedVariant(variant);
  };

  // const [editMode, setEditMode] = useState(false);

  return (
    <LitemodeTemplate
      topBar={<LiteModeTopBar />}
      sideBar={<SideBar />}
      actionPanel={<ActionPanel onVariantSelect={handleVariantSelection} />}
      mainContent={<MainContent variant={selectedVariant} setVariant={setSelectedVariant} />}
      // editPanel={<EditPanel />}
      // editMode={editMode}
    />
  );
};

export default EnvogueLitemode;
