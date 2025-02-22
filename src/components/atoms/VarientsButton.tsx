'use client';
import { useState } from 'react';

const VarientsButton = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const variants = [1, 2, 3, 4];
  return (
    <div className="flex gap-[0.625rem] w-[100%]">
      {variants.map(num => (
        <button
          type="button"
          onClick={() => setActiveIndex(num === activeIndex ? null : num)}
          key={num}
          className={`flex justify-center items-center text-primary text-[1rem] font-bold font-satoshi cursor-pointer
          rounded-[0.188rem] bg-card h-[3.75rem] w-[100%] p-0.5
          ${activeIndex === num
          ? 'bg-gradient-to-r from-[#F28E4C] via-[#C9649A] via-[#FF5A5E] to-[#61A6F2]'
          : 'bg-amber-200'
        }`}
        >
          <div className="flex justify-center items-center w-[100%] h-[100%] bg-card rounded-[0.188rem]">{num}</div>
        </button>
      ))}
    </div>
  );
};

export default VarientsButton;

// py-[1.187rem] px-[1.937rem] border-[#1C212A]
