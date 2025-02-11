import React from 'react';
import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, totalStars = 5 }) => {
  return (
    <div className="flex justify-center gap-[4px] w-[147px] h-[28px]">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            size={20}
            className={`${
              rating >= starValue
                ? 'text-yellow-400' // Fully filled stars
                : rating >= starValue - 0.5
                  ? '*:text-yellow-400' // Half-filled star
                  : 'text-gray-400' // Grey filled stars
            }`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
