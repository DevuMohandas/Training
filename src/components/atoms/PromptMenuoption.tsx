import { CloseVector } from '@/assets/OtherIcons';
import React, { useState } from 'react';

type PromptMenuOptionProps = {
  option: string;
  onSelect: (prompt: string) => void;
  onRemove: (prompt: string) => void;
};

const PromptMenuOption = ({ option, onSelect, onRemove }: PromptMenuOptionProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(true);
    onSelect(option);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSelected(false);
    onRemove(option);
  };

  return (
    <button
      type="button"
      onClick={handleSelect}
      className={`text-primary font-satoshi mb-[1.25rem] p-[1px] cursor-pointer
      text-[0.5rem] rounded-[0.25rem] ${isSelected ? 'bg-gradient-main' : 'bg-[#1C212A]'}`}
    >
      <div className={`flex justify-center w-full h-full bg-card rounded-[0.25rem] py-0.5 ${isSelected && 'gap-1.5'}`}>
        {option}
        {isSelected && (
          <button type="button" onClick={handleRemove}><CloseVector className="color-icon w-[0.85rem] h-[0.85rem] cursor-pointer" /></button>
        )}
      </div>
    </button>
  );
};

export default PromptMenuOption;
