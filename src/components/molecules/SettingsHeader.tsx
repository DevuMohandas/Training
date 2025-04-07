import { useState } from 'react';
import SettingsSectionTitles from '../atoms/SettingsSectionTitles';

type headerProps = {
  onSelect: (selectedSection: string) => void;
};

const SettingsHeader = ({ onSelect }: headerProps) => {
  const [selectedSection, setSelectedSection] = useState('Profile');

  const handleSelect = (section: string) => {
    setSelectedSection(section);
    onSelect(section);
  };

  return (
    <div className="flex flex-col gap-[52px] border-b-[1px] card-border px-space-10 pt-[2.1875rem]">
      <div className="w-fit text-4xl font-system-bold bg-gradient-to-r from-[#61A6F2] via-[#C9649A] to-[#F28E4C] bg-clip-text text-transparent">
        Settings
      </div>
      <div className="flex gap-space-14 overflow-auto scrollbar-hide">
        {['Profile', 'Teams', 'Account Management'].map(section => (
          <button type="button" key={section} onClick={() => handleSelect(section)}>
            <SettingsSectionTitles label={section} isSelected={selectedSection === section} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SettingsHeader;

// max-h-[9.3125rem]
