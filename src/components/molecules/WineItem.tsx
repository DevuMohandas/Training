import type React from 'react';
import Image from 'next/image';
import PercentageCircle from '../atoms/PercentageCircle';
import StarRating from './StarRating';

interface WineItemProps {
  image: string;
  name: string;
  place: string;
  rating: number;
  Percentage: number;
}

const WineItem: React.FC<WineItemProps> = ({ image, name, place, rating, Percentage }) => {
  return (
    <div className="flex flex-col h-fit w-fit">
      <div className="flex justify-center">
        <Image
          src={image}
          alt="Item-Image"
          width={111}
          height={213}
          className="ml-[40px]"
        />
        <div className=""><PercentageCircle value={Percentage} /></div>
      </div>
      <div className="mt-[5px] text-center font-[500] text-[1rem] text-[#F78A79]">{name}</div>
      <div className="mt-[22px] text-center font-[300] text-[1rem] text-[#394A59]">Gran feudo</div>
      <div className="text-center font-[300] text-[1rem] text-[#394A59]">Navarra, España</div>
      <div className="mt-[22px] flex justify-center items-center"><StarRating rating={rating} /></div>
    </div>
  );
};

export default WineItem;
