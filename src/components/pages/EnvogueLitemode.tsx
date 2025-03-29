'use client';
// import { useTranslations } from 'next-intl';
import { useState } from 'react';
import LiteModeTopBar from '../molecules/LiteModeTopBar';
import ActionPanel from '../organisms/ActionPanel';
import MainContent from '../organisms/MainContent';
import SideBar from '../organisms/SideBar';
import LitemodeTemplate from '../template/LitemodeTemplate';

const EnvogueLitemode = () => {
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);
  // const t = useTranslations();

  const handleVariantSelection = (variant: number | null) => {
    setSelectedVariant(variant);
  };

  return (
    <LitemodeTemplate
      topBar={<LiteModeTopBar />}
      sideBar={<SideBar />}
      actionPanel={
        (
          <ActionPanel
            onVariantSelect={handleVariantSelection}
            // uploadtext={t('upload_image')}
            // variantstext={t('variants')}
            // generatetext={t('generate_button_title')}
            // jewelusagetext={t('jewels_unit')}
            // prompt={t('prompt_box_title')}
            // negativePrompt={t('negative_prompt_title')}
          />
        )
      }
      mainContent={<MainContent variant={selectedVariant} setVariant={setSelectedVariant} />}
    />
  );
};

export default EnvogueLitemode;
