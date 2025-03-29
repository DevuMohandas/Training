import Image from 'next/image';
import React from 'react';

type AvatarProps = {
  name?: string;
  image?: string;
};

const Avatar = ({ name, image }: AvatarProps) => {
  const initials = name
    ? name
        .split(' ')
        .map(word => word[0])
        .slice(0, 2) // get first two initials
        .join('')
        .toUpperCase()
    : 'User';

  return (
    <div className="p-space-03 flex justify-center items-center p-space- rounded-full bg-gradient-to-r from-[#61A6F2] via-[#C9649A] to-[#F28E4C] overflow-hidden">
      {image
        ? <Image alt={name || 'User Avatar'} src={image} width={100} height={100} className="w-[2.5rem] h-[2.5rem] rounded-full" />
        : <div className="text-[#FFFFFF] font-bold text-base">{initials && initials.toUpperCase()}</div>}
    </div>
  );
};

export default Avatar;

// w-[2.875rem] h-[2.875rem]
