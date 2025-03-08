import Image from 'next/image';
import React from 'react';

type UndoRedoButtonProps = {
  icon: string;
  label: string;
  onClick?: () => void;
}

const UndoRedoButton: React.FC<UndoRedoButtonProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center bg-card border-1 card-border w-[39px] rounded-xs">
      <div className="mt-[11px]"><Image alt={label} src={icon} width={19} height={10} /></div>
      <div className="mt-[5px] text-[0.5rem] font-light text-primary">{label}</div>
    </div>
  );
};

export default UndoRedoButton;
// h-[39px]
