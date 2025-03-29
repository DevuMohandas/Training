type HistoryBoxProps = {
  text: string;
};

const HistoryBox = ({ text }: HistoryBoxProps) => {
  const maxLength = 20;
  const truncatedText = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  return (
    <div className="w-full bg-card border card-border rounded-radius-xl pl-space-04 py-space-01 flex items-center">
      <span className="text-primary font-system-bold text-base">{truncatedText}</span>
    </div>
  );
};

export default HistoryBox;
