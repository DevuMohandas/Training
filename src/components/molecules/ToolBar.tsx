import Image from 'next/image';
import UndoRedoButton from '../atoms/UndoRedoButton';

const ToolBar = () => {
  return (
    <div className="w-[4.5rem] rounded-[1.188rem] pt-4 px-4 pb-8 bg-special border-l-2 border-[#1C212A]" style={{ boxShadow: '0px 4px 22.5px 0px #C6C6C640' }}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <UndoRedoButton label="Undo" icon="assets/icons/undo-vector.svg" />
          <UndoRedoButton label="Redo" icon="assets/icons/redo-vector.svg" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="w-[39px] h-[39px] flex justify-center"><Image alt="icon" src="assets/icons/4icons.svg" width={32.5} height={32.5} /></div>
          <div className="w-[39px]"><Image alt="icon" src="assets/icons/eraser.svg" width={38.39} height={24.69} /></div>
          <div className=""><Image alt="icon" src="assets/icons/pen1.svg" width={45.87} height={15.95} /></div>
          <div className="w-[39px] h-[39px] flex justify-center"><Image alt="icon" src="assets/icons/options-icon.svg" width={31.2} height={24.38} /></div>
          <div className="flex justify-center"><Image alt="icon" src="assets/icons/color-ellipse.svg" width={27} height={27} /></div>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
