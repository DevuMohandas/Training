import Image from 'next/image';
import React from 'react';

type UndoRedoButtonProps = {
  icon: string;
  label: string;
  onClick?: () => void;
};

const UndoRedoButton = ({ icon, label, onClick }: UndoRedoButtonProps) => {
  return (
    <button type="button" onClick={onClick} className="flex flex-col items-center bg-card border-1 card-border w-[2.43rem] gap-1 rounded-xs p-1">
      <Image alt={label} src={icon} width={19} height={10} />
      <span className="text-[0.5rem] font-light text-primary">{label}</span>
    </button>
  );
};

export default UndoRedoButton;
