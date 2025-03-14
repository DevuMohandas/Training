import HistoryBox from '../atoms/HistoryBox';

type TimeLineSectionProps = {
  timeline: string;
  historyList: { id: number; prompt: string }[];
};

const TimeLineSection = ({ timeline, historyList }: TimeLineSectionProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-[1.25rem] text-primary font-bold">{timeline}</div>
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
