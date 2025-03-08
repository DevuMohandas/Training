import Image from 'next/image';
import React from 'react';
import CustomButton from '../atoms/CustomButton';
import VarientsButton from '../atoms/VarientsButton';
import NegativePromptSection from '../molecules/NegativePromptSection';
// import PromptMenu from '../molecules/PromptMenu';
import ToolBar from '../molecules/ToolBar';
import PromptSection from './PromptSection';

const EditPanel = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className="flex flex-col bg-body">
      <div className="flex justify-center items-center py-20 pl-20">
        <div className="flex flex-1 items-center justify-center">
          <Image alt="edit-image" src="assets/images/edit-image.svg" width={400} height={400} className="bg-white" />
        </div>
        <ToolBar />
      </div>
      <div className="px-10">
        <div className="flex gap-3">
          <div className="flex flex-col w-[100%] gap-2">
            <div className="h-[100%] relative">
              <PromptSection toggleMenu={toggleMenu} />
              {/* {menuOpen && <div className="absolute"><PromptMenu isMenuOpen={menuOpen} /></div>} */}
            </div>
            <div className="h-[100%]"><NegativePromptSection /></div>
          </div>
          <div className="flex flex-col grow gap-3.5">
            <div className="flex flex-col min-w-[250px] p-3.5 bg-card rounded-[1rem] border-1 card-border gap-1.5">
              <div className="text-primary font-bold text-[20px]">Variants</div>
              <VarientsButton />
            </div>
            <div className="flex justify-center"><CustomButton variant="primary" text="Generate" className="w-[100%]" /></div>
            <div className="text-[0.875rem] text-[#A6A6A6] font-satoshi font-bold text-center">This will use 12 Jewels</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPanel;
