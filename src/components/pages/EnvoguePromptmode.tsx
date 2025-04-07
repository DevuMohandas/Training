'use client';
import { promptWithImage } from '@/constants/EnvogueaiConstants';
import { useEffect, useState } from 'react';
import ImageAnimationCard from '../atoms/ImageAnimationCard';
import ImageLoaderSection from '../molecules/ImageLoaderSection';
import ImageViewCard from '../molecules/ImageViewCard';
import LiteModeTopBar from '../molecules/LiteModeTopBar';
import PromptModeSection from '../organisms/PromptModeSection';
import PromptModeSidePanel from '../organisms/PromptModeSidePanel';
import SideBar from '../organisms/SideBar';
import PromptmodeTemplate from '../template/PromptmodeTemplate';

const EnvoguePromptmode = () => {
  const [userHistoryArray, setUserHistoryArray] = useState<{ id: number; prompt: string; images: string[]; timestamp: Date }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [userPrompt, setUserPrompt] = useState('');
  const [categorizedHistory, setCategorizedHistory] = useState({
    todayHistory: [] as { id: number; prompt: string }[],
    last7DaysHistory: [] as { id: number; prompt: string }[],
    last30DaysHistory: [] as { id: number; prompt: string }[],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [newDesign, setNewDesign] = useState(false);

  const updateUserHistory = () => {
    setUserHistoryArray(prevHistory => [
      ...prevHistory,
      {
        id: prevHistory.length + 1,
        prompt: userPrompt,
        images: generatedImages,
        timestamp: new Date(),
      },
    ]);
  };

  const categorizeHistory = () => {
    const today = new Date();
    const startOfToday = new Date(today.setHours(0, 0, 0, 0)).getTime();
    const startOfLast7Days = new Date(today.setDate(today.getDate() - 6)).getTime();
    const startOfLast30Days = new Date(today.setDate(today.getDate() - 23)).getTime();

    const todayHistory = userHistoryArray
      .filter(item => new Date(item.timestamp).getTime() >= startOfToday)
      .map(({ id, prompt }) => ({ id, prompt }));

    const last7DaysHistory = userHistoryArray
      .filter(item => new Date(item.timestamp).getTime() < startOfToday && new Date(item.timestamp).getTime() >= startOfLast7Days)
      .map(({ id, prompt }) => ({ id, prompt }));

    const last30DaysHistory = userHistoryArray
      .filter(item => new Date(item.timestamp).getTime() < startOfLast7Days && new Date(item.timestamp).getTime() >= startOfLast30Days)
      .map(({ id, prompt }) => ({ id, prompt }));

    setCategorizedHistory({
      todayHistory,
      last7DaysHistory,
      last30DaysHistory,
    });
  };

  useEffect(() => {
    categorizeHistory();
  }, [userHistoryArray]);

  useEffect(() => {
    if (generatedImages.length > 0 && userPrompt) {
      updateUserHistory();
    }
  }, [generatedImages]);

  useEffect(() => {
    if (isTyping) {
      return;
    }
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % promptWithImage.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isTyping]);

  useEffect(() => {
    setIsLoading(false);
  }, [userPrompt]);

  return (
    <div>
      <PromptmodeTemplate
        cardVisible={false}
        imageViewCard={<ImageViewCard src="assets/images/j1.svg" prompt={userPrompt} negativePrompt="This is Negative Prompt Section." />}
        topbar={<LiteModeTopBar />}
        sidebar={<SideBar />}
        sidepanel={<PromptModeSidePanel setNewDesign={setNewDesign} categorizedHistory={categorizedHistory} setIsLoading={setIsLoading} />}
        animationcard={
          isLoading && userPrompt
            ? <ImageLoaderSection setLastGeneratedImages={setGeneratedImages} variants={4} />
            : <ImageAnimationCard src={promptWithImage[currentIndex]?.imageUrl} variant="promptpage" />
        }
        promptsection={
          <PromptModeSection autoprompt={promptWithImage[currentIndex]?.prompt} setIsTyping={setIsTyping} setIsLoading={setIsLoading} setUserPrompt={setUserPrompt} />
        }
      />
    </div>
  );
};

export default EnvoguePromptmode;
