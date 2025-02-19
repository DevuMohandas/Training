import Image from 'next/image';
import React from 'react';

type AvatarProps = {
  name?: string;
  image?: string;
};

const Avatar: React.FC<AvatarProps> = ({ name, image }) => {
  let initials;

  if (name) {
    const nameParts = name.split(' ');
    if (nameParts.length > 0) {
      initials = nameParts.length > 1
        ? `${nameParts[0]?.[0] ?? ''}${nameParts[nameParts.length - 1]?.[0] ?? ''}`
        : nameParts[0]?.[0] ?? '';
    }
  }

  return (
    <div className="flex justify-center items-center w-[2.875rem] h-[2.875rem] rounded-full bg-gradient-to-r from-[#61A6F2] via-[#C9649A] to-[#F28E4C] overflow-hidden">
      {image ? <Image alt="Profile" src={image} width={100} height={100} className="w-[2rem] h-[2rem] rounded-full" /> : <div className="text-[#FFFFFF] font-[700] text-[1rem]">{initials && initials.toUpperCase()}</div>}
    </div>
  );
};

export default Avatar;
