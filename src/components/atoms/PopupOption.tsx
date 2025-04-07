import Image from 'next/image';

type PopupOptionProps = {
  label: string;
  icon: string;
  isSelected: boolean;
  onClick: () => void;
};

const PopupOption = ({ label, icon, isSelected, onClick }: PopupOptionProps) => {
  return (
    <button type="button" onClick={onClick} className="flex gap-[10px] cursor-pointer">
      <Image src={icon} width={18} height={18} alt="icon" />
      <p className={`text-sm font-system-regular ${isSelected ? 'text-primary' : 'text-secondary'}`}>{label}</p>
    </button>
  );
};

export default PopupOption;
