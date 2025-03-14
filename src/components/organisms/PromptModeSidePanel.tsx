import GradientBorderButton from '../atoms/GradientBorderButton';
import TimeLineSection from '../molecules/TimeLineSection';
import UpgradeNoticeCard from '../molecules/UpgradeNoticeCard';

type PromptModeSidePanelProps = {
  categorizedHistory: {
    todayHistory: { id: number; prompt: string }[];
    last7DaysHistory: { id: number; prompt: string }[];
    last30DaysHistory: { id: number; prompt: string }[];
  };
};

const PromptModeSidePanel = ({ categorizedHistory }: PromptModeSidePanelProps) => {
  return (
    <div className="bg-special px-6 py-8 w-[13rem] md:w-[15rem] lg:w-[18rem] xl:w-[22.188rem] h-full overflow-auto">
      <div className="flex flex-col gap-14 flex-1">
        <div className="flex flex-col gap-9">
          <GradientBorderButton variant="secondary" text="+ New Design" />
          <UpgradeNoticeCard />
        </div>
        <div className="flex flex-col gap-[3.375rem]">
          <TimeLineSection timeline="Today" historyList={categorizedHistory.todayHistory} />
          <TimeLineSection timeline="Last 7 days" historyList={categorizedHistory.last7DaysHistory} />
          <TimeLineSection timeline="Last 30 days" historyList={categorizedHistory.last30DaysHistory} />
        </div>
      </div>
    </div>
  );
};

export default PromptModeSidePanel;
