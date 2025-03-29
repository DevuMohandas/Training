import { CloseVector } from '@/assets/OtherIcons';
import React, { useState } from 'react';

type PromptMenuOptionProps = {
  key: number;
  id: number;
  option: string;
  onSelect: (id: number) => void;
  onRemove: (id: number) => void;
};

const PromptMenuOption = ({ id, option, onSelect, onRemove }: PromptMenuOptionProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(true);
    onSelect(id);
    console.warn(id, option);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSelected(false);
    onRemove(id);
  };

  return (
    <button
      type="button"
      onClick={handleSelect}
      className={`text-primary font-satoshi p-space-0 my-space-02 cursor-pointer
      text-xxs rounded-radius-xs ${isSelected ? 'bg-gradient-main' : 'bg-[#1C212A]'}`}
    >
      <div className={`flex justify-center w-full h-full bg-card rounded-radius-xs py-space-0 px-space-01 ${isSelected && 'gap-space-02'}`}>
        <div className="text-primary text-xxs font-system-light">{option}</div>
        {isSelected && (
          <button type="button" onClick={handleRemove}><CloseVector className="color-icon w-[0.85rem] h-[0.85rem] cursor-pointer" /></button>
        )}
      </div>
    </button>
  );
};

export default PromptMenuOption;
// mb-[1.25rem]
