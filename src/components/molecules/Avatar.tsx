import { userData } from '@/constants/EnvogueaiConstants';
import Image from 'next/image';
import React, { useState } from 'react';
import ProfilePopup from './ProfilePopup';

type AvatarProps = {
  name?: string;
  image?: string | undefined;
};

const Avatar = ({ name, image }: AvatarProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const initials
  = userData.firstname && userData.lastname
    ? userData.firstname[0] + userData.lastname[0]
    : 'User';

  return (
    <div className="relative w-full h-full">
      <button aria-label="avatar-button" type="button" onClick={() => setShowPopup(!showPopup)} className="p-space-01 flex justify-center w-full cursor-pointer h-full items-center rounded-full bg-gradient-to-r from-[#61A6F2] via-[#C9649A] to-[#F28E4C] overflow-hidden">
        {userData.profileImage
          ? <Image alt={name || 'User Avatar'} src={userData.profileImage} width={100} height={100} className="w-full h-full rounded-full" />
          : <div className="text-[#FFFFFF] font-bold text-base">{initials && initials.toUpperCase()}</div>}
      </button>
      {showPopup && (
        <div className="absolute bottom-12 left-1.5 z-1">
          <ProfilePopup />
        </div>
      )}
    </div>
  );
};

export default Avatar;

// const initials = name
//     ? name
//         .split(' ')
//         .map(word => word[0])
//         .slice(0, 2) // get first two initials
//         .join('')
//         .toUpperCase()
//     : 'User';
