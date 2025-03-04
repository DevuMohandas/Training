'use client';
import { useState } from 'react';
import LiteModeTopBar from '../molecules/LiteModeTopBar';
import ActionPanel from '../organisms/ActionPanel';
import MainContent from '../organisms/MainContent';
import SideBar from '../organisms/SideBar';
import LitemodeTemplate from '../template/LitemodeTemplate';

const EnvogueLitemode = () => {
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);

  const handleVariantSelection = (variant: number | null) => {
    setSelectedVariant(variant);
  };

  return (
    <LitemodeTemplate
      topBar={<LiteModeTopBar />}
      sideBar={<SideBar />}
      actionPanel={<ActionPanel onVariantSelect={handleVariantSelection} />}
      mainContent={<MainContent variant={selectedVariant} setVariant={setSelectedVariant} />}
    />
  );
};

export default EnvogueLitemode;

// <div className="absolute left-0 top-0 h-[100%]"><PromptMenu /></div>
