// import Image from 'next/image';
import ToolBarOptions from '../atoms/ToolBarOptions';
import UndoRedoButton from '../atoms/UndoRedoButton';

const ToolBar = () => {
  const toolsList = [
    { icon: '/assets/icons/4icons.svg', alt: '4icons' },
    { icon: '/assets/icons/eraser.svg', alt: 'eraser' },
    { icon: '/assets/icons/pen1.svg', alt: 'pen1' },
    { icon: '/assets/icons/options-icon.svg', alt: 'options-icon' },
    { icon: '/assets/icons/color-ellipse.svg', alt: 'color-ellipse' },
  ];

  return (
    <div className="w-[4.5rem] rounded-radius-2xl pt-space-04 px-space-04 pb-space-08 bg-special border-l-2 border-[#1C212A]" style={{ boxShadow: '0px 4px 22.5px 0px #C6C6C640' }}>
      <div className="flex flex-col gap-space-06">
        <div className="flex flex-col gap-space-02">
          <UndoRedoButton label="Undo" icon="/assets/icons/undo-vector.svg" />
          <UndoRedoButton label="Redo" icon="/assets/icons/redo-vector.svg" />
        </div>
        <div className="flex flex-col gap-space-06">
          {toolsList.map((tool, index) => (
            <ToolBarOptions
              key={index}
              icon={tool.icon}
              alt={tool.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolBar;

// {/* <button type="button" className="w-[2.438rem] h-[2.438rem] flex justify-center"><Image alt="icon" src="assets/icons/4icons.svg" width={32.5} height={32.5} /></button>
// <button type="button" className="w-[2.438rem]"><Image alt="icon" src="assets/icons/eraser.svg" width={38.39} height={24.69} /></button>
// <div><Image alt="icon" src="assets/icons/pen1.svg" width={45.87} height={15.95} /></div>
// <div className="w-[2.438rem] h-[2.438rem] flex justify-center"><Image alt="icon" src="assets/icons/options-icon.svg" width={31.2} height={24.38} /></div>
// <div className="flex justify-center"><Image alt="icon" src="assets/icons/color-ellipse.svg" width={27} height={27} /></div> */}
