'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import PromptCardOption from '../atoms/PromptCardOption';

// type Option = {
//   id: number;
//   option: string;
// };

const PromptMenu = () => {
  // const [options, setOptions] = useState<Option[]>([]);
  const [cardVisible, setCardVisible] = useState(true);

  const options = [
    { id: 1, option: 'Golden Ring' },
    { id: 2, option: 'Silver Ring' },
    { id: 3, option: 'Bronze Ring' },
    { id: 4, option: 'Platinum Ring' },
    { id: 5, option: 'Diamond Ring' },
    { id: 6, option: 'Ruby Ring' },
    { id: 7, option: 'Sapphire Ring' },
  ];

  // useEffect(() => {
  //   const fetchOptions = async () => {
  //     try {
  //       const response = await fetch('/promptOptions.json');
  //       const data: Option[] = await response.json();
  //       setOptions(data);
  //       console.warn(data);
  //     } catch (error) {
  //       console.error('Error fetching options:', error);
  //     }
  //   };
  //   fetchOptions();
  // }, []);

  return (
    <div>
      {cardVisible && (
        <div className="flex p-[1.416rem] bg-special border border-[#1C212A] rounded-[0.625rem] max-w-[17.687rem] h-full">
          <div className="flex flex-col gap-6 w-[100%] h-[100%]">
            <button type="button" className="flex justify-end cursor-pointer" onClick={() => setCardVisible(prev => !prev)}>
              <Image src="assets/icons/close-vector.svg" alt="close-icon" width={14} height={14} />
            </button>
            <div className="grid grid-cols-2 gap-2">
              {options.map(option => (
                <PromptCardOption
                  key={option.id}
                  option={option.option}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptMenu;
