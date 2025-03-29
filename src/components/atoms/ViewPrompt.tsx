import Image from 'next/image';
import React from 'react';

type ViewPromptProps = {
  title: string;
  prompt: string;
};

const ViewPrompt = ({ title, prompt }: ViewPromptProps) => {
  const [copied, setCopied] = React.useState(false);
  const handleCopying = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-card flex flex-col card-border p-space-03 rounded-radius-xl relative max-w-96">
      <div className="flex justify-between">
        <div className="font-system-bold new-lg:text-lg text-primary">{title}</div>
        <button type="button" onClick={handleCopying}><Image alt="copy" src="/assets/icons/copy-vector.svg" width={14.63} height={17.56} /></button>
      </div>
      <div className="pr-space-02 text-xs new-lg:text-sm font-system-regular new-lg:leading-tight text-secondary">{prompt}</div>
      {copied && <div className="absolute right-6 text-secondary bg-card border card-border p-space-1 rounded-radius-xs text-xs">Text Copied Succesfully!</div>}
    </div>
  );
};

export default ViewPrompt;
