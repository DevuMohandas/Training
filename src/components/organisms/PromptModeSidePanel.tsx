import { useTranslations } from 'next-intl';
import GradientBorderButton from '../atoms/GradientBorderButton';
import TimeLineSection from '../molecules/TimeLineSection';
import UpgradeNoticeCard from '../molecules/UpgradeNoticeCard';

type PromptModeSidePanelProps = {
  categorizedHistory: {
    todayHistory: { id: number; prompt: string }[];
    last7DaysHistory: { id: number; prompt: string }[];
    last30DaysHistory: { id: number; prompt: string }[];
  };
  setIsLoading: (isLoading: boolean) => void;
  setNewDesign: (newDesign: boolean) => void;
};

const PromptModeSidePanel = ({ categorizedHistory, setIsLoading, setNewDesign }: PromptModeSidePanelProps) => {
  const t = useTranslations();
  const handleNewDesign = () => {
    setIsLoading(false);
    setNewDesign(true);
  };

  return (
    <div className="bg-special px-space-06 py-space-08 w-[13rem] md:w-[15rem] lg:w-[18rem] xl:w-[22.188rem] h-full overflow-auto custom-scrollbar">
      <div className="flex flex-col gap-space-14 flex-1">
        <div className="flex flex-col gap-space-10">
          <GradientBorderButton variant="secondary" text={t('new_design')} onClick={handleNewDesign} />
          <UpgradeNoticeCard />
        </div>
        <div className="flex flex-col gap-space-14">
          {(categorizedHistory.todayHistory).length > 0 && <TimeLineSection timeline="Today" historyList={categorizedHistory.todayHistory} /> }
          {(categorizedHistory.last7DaysHistory).length > 0 && <TimeLineSection timeline="Last 7 days" historyList={categorizedHistory.last7DaysHistory} />}
          {(categorizedHistory.last30DaysHistory).length > 0 && <TimeLineSection timeline="Last 30 days" historyList={categorizedHistory.last30DaysHistory} />}
        </div>
      </div>
    </div>
  );
};

export default PromptModeSidePanel;
