import { DownArrowIcon, RightArrowIcon } from '@/assets/OtherIcons';
import { useEffect, useState } from 'react';

type NegativePromptSectionProps = {
  setPrompt?: (setPrompt: string) => void;
  displayNegativePrompt?: string | undefined;
};

const NegativePromptSection = ({ setPrompt, displayNegativePrompt }: NegativePromptSectionProps) => {
  const [promptOpen, setPromptOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
    setPrompt?.(e.target.value);
  };

  useEffect(() => {
    if (displayNegativePrompt) {
      setInputValue(displayNegativePrompt);
      setPromptOpen(true);
    }
  }, [displayNegativePrompt]);

  return (
    <div className="flex flex-col justify-center bg-card border-[1px] py-space-02 pl-space-03
      card-border rounded-radius-xl h-full"
    >
      <div className="flex gap-space-02">
        <button type="button" aria-label="Toggle Negative Prompt" onClick={() => setPromptOpen(!promptOpen)}>
          {promptOpen ? <DownArrowIcon className="color-icon" /> : <RightArrowIcon className="color-icon" /> }
        </button>
        <div className="text-satoshi text-primary ds-text-base font-bold">Negative Prompt</div>
      </div>
      <div className="overflow-auto custom-scrollbar">
        {promptOpen
        && (
          <textarea
            value={inputValue}
            onChange={handleInput}
            className="bg-transparent border-none text-secondary text-sm
            leading-normal w-full resize-none outline-none font-system-bold p-space-02 overflow-auto"
            rows={1}
          />
        )}
      </div>
    </div>
  );
};

export default NegativePromptSection;
