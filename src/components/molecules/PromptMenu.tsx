import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import PromptMenuOption from '../atoms/PromptMenuoption';

type PromptMenuProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  onSelectPrompt: (prompt: string) => void;
};

const PromptMenu: React.FC<PromptMenuProps> = ({ isMenuOpen, toggleMenu, onSelectPrompt }) => {
  const options = [
    { id: 1, option: 'Golden Ring' },
    { id: 2, option: 'Silver Ring' },
    { id: 3, option: 'Bronze Ring' },
    { id: 4, option: 'Platinum Ring' },
    { id: 5, option: 'Diamond Ring' },
    { id: 6, option: 'Ruby Ring' },
    { id: 7, option: 'Sapphire Ring' },
    { id: 8, option: 'Emerald Ring' },
    { id: 9, option: 'Golden Ring' },
    { id: 10, option: 'Silver Ring' },
    { id: 11, option: 'Bronze Ring' },
    { id: 12, option: 'Platinum Ring' },
    { id: 13, option: 'Diamond Ring' },
    { id: 14, option: 'Ruby Ring' },
    { id: 15, option: 'Sapphire Ring' },
    { id: 16, option: 'Emerald Ring' },
    { id: 17, option: 'Golden Ring' },
    { id: 18, option: 'Silver Ring' },
  ];

  return (
    <AnimatePresence>
      <div>
        {isMenuOpen && (
          <motion.div
            key="prompt-menu"
            initial={{ scaleX: 0 }} // Start fully collapsed (hidden)
            animate={{ scaleX: 1 }} // Expand to full width
            exit={{ scaleX: 0 }} // Collapse when closing
            transition={{ type: 'tween', duration: 0.6, ease: 'easeInOut' }} // Smooth animation
            style={{ boxShadow: '0px 0px 9.8px 0px #37353540', transformOrigin: 'left' }}
            className="flex p-[1.416rem] bg-special border border-[#1C212A] rounded-[0.625rem] w-[15rem] md:w-[17.687rem] h-[100%]"
          >
            <div className="flex flex-col gap-6 w-[100%]">
              <button type="button" className="flex justify-end cursor-pointer" onClick={toggleMenu}>
                <Image src="assets/icons/close-vector.svg" alt="close-icon" width={14} height={14} />
              </button>
              <div className="grid grid-cols-2 gap-2">
                {options.map(option => (
                  <PromptMenuOption
                    key={option.id}
                    option={option.option}
                    onSelect={onSelectPrompt}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default PromptMenu;
