import HistoryBox from '../atoms/HistoryBox';

type TimeLineSectionProps = {
  timeline: string;
  historyList: { id: number; prompt: string }[];
};

const TimeLineSection = ({ timeline, historyList }: TimeLineSectionProps) => {
  return (
    <div className="flex flex-col gap-space-02">
      <div className="text-lg text-primary font-system-bold">{timeline}</div>
      {historyList.map(({ id, prompt }) =>
        (
          <HistoryBox
            key={id}
            text={prompt}
          />
        ),
      )}
    </div>
  );
};

export default TimeLineSection;
