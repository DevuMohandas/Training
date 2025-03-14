import { PROMPTMENU_OPTIONS } from '@/constants/EnvogueaiConstants';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import PromptMenuOption from '../atoms/PromptMenuoption';

type PromptMenuProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  onSelectPrompt: (prompt: string) => void;
  onRemovePrompt: (prompt: string) => void;
};

const PromptMenu: React.FC<PromptMenuProps> = ({ isMenuOpen, toggleMenu, onSelectPrompt, onRemovePrompt }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        toggleMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside); // Triggers when mouse button is pressed down

    return () => { // ensures that when component unmounts (or when isMenuOpen becomes false), the event listener is removed.
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, toggleMenu]);

  return (
    <AnimatePresence>
      <div className="h-full">
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            key="prompt-menu"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ type: 'tween', duration: 0.6, ease: 'easeInOut' }}
            style={{ boxShadow: '0px 0px 9.8px 0px #37353540', transformOrigin: 'left' }}
            className="flex p-[1.416rem] bg-special border border-[#1C212A] rounded-[0.625rem] w-[13rem] md:w-[15rem] lg:w-[17.687rem] h-[100%]"
          >
            <div className="flex flex-col gap-6 w-[100%]">
              <button type="button" className="flex justify-end cursor-pointer" onClick={toggleMenu}>
                <Image src="assets/icons/close-vector.svg" alt="close-icon" width={14} height={14} />
              </button>
              <div className="grid grid-cols-2 gap-2">
                {PROMPTMENU_OPTIONS.map(option => (
                  <PromptMenuOption
                    key={option.id}
                    option={option.option}
                    onSelect={onSelectPrompt}
                    onRemove={onRemovePrompt}
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
