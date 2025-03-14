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
    <div className="bg-card flex flex-col card-border p-2.5 rounded-[1rem] relative max-w-96">
      <div className="flex justify-between">
        <div className="font-bold lg:text-[1.25rem] text-primary">{title}</div>
        <button type="button" onClick={handleCopying}><Image alt="copy" src="assets/icons/copy-vector.svg" width={14.63} height={17.56} /></button>
      </div>
      <div className="pr-1.5 text-[0.60rem] lg:text-[0.75rem] font-normal lg:leading-4 text-secondary">{prompt}</div>
      {copied && <div className="absolute right-6 text-secondary bg-card border card-border p-1 rounded-[4px] text-[0.625rem]">Text Copied Succesfully!</div>}
    </div>
  );
};

export default ViewPrompt;
