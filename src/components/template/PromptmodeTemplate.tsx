type PromptmodeTemplateProps = {
  topbar: React.ReactNode;
  sidebar: React.ReactNode;
  sidepanel: React.ReactNode;
  animationcard: React.ReactNode;
  promptsection: React.ReactNode;
  imageViewCard: React.ReactNode;
  cardVisible: boolean;
};

const PromptmodeTemplate = ({ topbar, sidebar, sidepanel, animationcard, promptsection, imageViewCard, cardVisible }: PromptmodeTemplateProps) => {
  return (
    <div className="flex flex-col bg-body h-screen">
      <div>{topbar}</div>
      <div className="flex h-0 flex-1">
        <div className="h-full">{sidebar}</div>
        <div className="overflow-auto h-full">{sidepanel}</div>
        <div className="flex flex-col flex-1 w-full overflow-auto relative">
          <div className="flex justify-center w-full h-1/2">{animationcard}</div>
          <div className="flex-1">{promptsection}</div>
          {cardVisible && <div className="absolute inset-0 flex justify-center items-center p-1.5">{imageViewCard}</div>}
        </div>
      </div>
    </div>
  );
};

export default PromptmodeTemplate;
// type PromptmodeTemplateProps = {
//   topbar: React.ReactNode;
//   sidebar: React.ReactNode;
//   sidepanel: React.ReactNode;
//   animationcard: React.ReactNode;
//   promptsection: React.ReactNode;
// };

// const PromptmodeTemplate = ({ topbar, sidebar, sidepanel, animationcard, promptsection }: PromptmodeTemplateProps) => {
//   return (
//     <div className="flex flex-col bg-body h-screen">
//       <div>{topbar}</div>
//       <div className="flex h-full">
//         <div className="h-full">{sidebar}</div>
//         <div className="overflow-auto h-full scrollbar-hide">{sidepanel}</div>
//         <div className="flex flex-col flex-1 w-full overflow-auto">
//           <div className="flex w-full h-1/2">{animationcard}</div>
//           <div>{promptsection}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PromptmodeTemplate;
