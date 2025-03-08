import Image from 'next/image';
import React from 'react';

type ViewPromptProps = {
  title: string;
  prompt: string;
};

const ViewPrompt: React.FC<ViewPromptProps> = ({ title, prompt }) => {
  const [copied, setCopied] = React.useState(false);
  const handleCopying = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
    setCopied(true);
  };

  return (
    <div className="bg-card flex flex-col max-w-[397px] card-border p-2.5 rounded-[1rem] relative">
      <div className="flex justify-between">
        <div className="font-bold lg:text-[1.25rem] text-primary">{title}</div>
        <button type="button" onClick={handleCopying}><Image alt="copy" src="assets/icons/copy-vector.svg" width={14.63} height={17.56} /></button>
      </div>
      <div className="pr-1.5 text-[0.60rem] lg:text-[0.75rem] font-normal lg:leading-4 text-secondary">{prompt}</div>
      {copied && <div className="absolute right-6 text-secondary bg-card border card-border p-1 rounded-[4px] text-[10px]">Text Copied Succesfully!</div>}
    </div>
  );
};

export default ViewPrompt;
