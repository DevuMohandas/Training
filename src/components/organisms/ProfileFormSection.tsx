'use client';
import { userData } from '@/constants/EnvogueaiConstants';
import useValidation from '@/hooks/useValidation';
import { useState } from 'react';
import CustomButton from '../atoms/CustomButton';
import GradientBorderButton from '../atoms/GradientBorderButton';
import AvatarBlock from '../molecules/AvatarBlock';
import ConfirmationPopup from '../molecules/ConfirmationPopup';
import ProfileFieldSection from '../molecules/ProfileFieldSection';

const ProfileFormSection = () => {
  const [profileImage, setProfileImage] = useState(userData.profileImage);
  const [Fname, setFname] = useState(userData.firstname);
  const [lname, setlastName] = useState(userData.lastname);
  const [password, setPassword] = useState(userData.password);
  const [newPassword, setNewPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const { errors, validate } = useValidation();

  const handleSubmit = () => {
    const isValid = validate({ Fname, lname, newPassword });
    if (isValid) {
      setShowPopup(true);
      console.warn(Fname, lname, password, newPassword, profileImage);
      // do save operation here
    }
  };

  return (
    <div className="flex flex-col pt-[2.875rem] gap-[2.175rem] px-space-10">
      <AvatarBlock setImage={setProfileImage} />
      <form action="" className="flex flex-col gap-9 max-w-[65.8125rem]">
        <ProfileFieldSection
          title="Full Name"
          inputs={[
            { label: 'First Name', variant: 'text', type: 'filled', setValue: setFname, error: errors?.Fname, value: Fname },
            { label: 'Last Name', variant: 'text', type: 'filled', setValue: setlastName, error: errors?.lname, value: lname },
          ]}
        />
        <ProfileFieldSection
          title="Contact Email"
          inputs={[
            { label: 'Manage your account’s email address for invoices', variant: 'email', type: 'outlined', value: userData.email },
          ]}
        />
        <ProfileFieldSection
          title="Password"
          description="Modify your current password"
          inputs={[
            { label: 'Current Password', variant: 'password', type: 'filled', setValue: setPassword, error: errors.password, value: password },
            { label: 'New Password', variant: 'password', type: 'filled', setValue: setNewPassword, error: errors.newPassword },
          ]}
        />
        <div className="flex gap-space-04">
          <CustomButton variant="primary" text="Save" icon="/assets/icons/save-vector.svg" className="w-[8.56rem]" onClick={handleSubmit} />
          <GradientBorderButton text="Logout" icon="/assets/icons/logout-vector.svg" className="w-[8.56rem] h-10" />
        </div>
      </form>
      {showPopup && <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"><ConfirmationPopup title="Data Saved Succesfully!" buttonText1="Ok" onConfirm={() => setShowPopup(false)} /></div>}
    </div>
  );
};

export default ProfileFormSection;
