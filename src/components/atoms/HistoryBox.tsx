type HistoryBoxProps = {
  text: string;
};

const HistoryBox = ({ text }: HistoryBoxProps) => {
  const maxLength = 30;
  const truncatedText = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  return (
    <div className="w-full bg-card border card-border rounded-[1rem] pl-5 py-1.5 flex items-center">
      <span className="text-primary font-bold text-[1rem]">{truncatedText}</span>
    </div>
  );
};

export default HistoryBox;
