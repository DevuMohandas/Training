type SettingsSectionProps = {
  label: string;
  isSelected: boolean;
};

const SettingsSectionTitles = ({ label, isSelected }: SettingsSectionProps) => {
  return (
    <div className="flex flex-col">
      <div className={`text-xl cursor-pointer ${isSelected ? 'font-system-bold text-primary' : 'font-system-regular text-secondary'}`}>
        {label}
      </div>
      {isSelected && <div className="w-full h-1 bg-gradient-to-r from-[#61A6F2] via-[#C9649A] to-[#F28E4C] rounded-radius-s"></div>}
    </div>
  );
};

export default SettingsSectionTitles;
