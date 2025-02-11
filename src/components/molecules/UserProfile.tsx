import Image from 'next/image';
import React from 'react';

interface UserProfileProps {
  name: string;
  coins: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, coins }) => {
  return (
    <div className="flex w-[252px] h-[74px] gap-[10px]">
      <Image
        src="/assets/images/money-Regular.png"
        alt="money"
        width={31}
        height={33}
        className="object-contain"
      />
      <div className="flex flex-col">
        <div className="text-[20.48px] font-[400] text-[#394A59]/80 object-contain">{name}</div>
        <div className="text-[13px] font-[700] text-[#394A59]/80 object-contain">{`${coins} Vineo Coins`}</div>
      </div>
    </div>
  );
};

export default UserProfile;
