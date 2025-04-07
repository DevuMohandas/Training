'use client';
import React, { useState } from 'react';
import AccountManagementPage from '../molecules/AccountManagementPage';
import ProfileModeTeamsPage from '../molecules/ProfileModeTeamsPage';
import SettingsHeader from '../molecules/SettingsHeader';
import ProfileFormSection from '../organisms/ProfileFormSection';
import ProfilemodeTemplate from '../template/ProfilemodeTemplate';
// import JewelCardPage from '../organisms/JewelCardPage';
// import JewelCard from '../molecules/JewelCard';

const EnvogueProfilemode = () => {
  const [selectedSection, setSelectedSection] = useState('Profile');
  return (
    <ProfilemodeTemplate
      headerSection={<SettingsHeader onSelect={setSelectedSection} />}
      formSection={selectedSection === 'Profile' ? <ProfileFormSection /> : (selectedSection === 'Teams' ? <ProfileModeTeamsPage /> : <AccountManagementPage />)}
    />
  );
};

export default EnvogueProfilemode;
