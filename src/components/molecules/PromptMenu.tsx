import { PROMPTMENU_OPTIONS } from '@/constants/EnvogueaiConstants';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import PromptMenuOption from '../atoms/PromptMenuoption';

// type Prompt = {
//   option: string;
//   id: number;
// };

type PromptMenuProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  onSelectPrompt: (id: number) => void;
  onRemovePrompt: (id: number) => void;
  variant?: 'promptmodepage' | 'litemodepage';
};

const PromptMenu = ({ isMenuOpen, toggleMenu, onSelectPrompt, onRemovePrompt, variant }: PromptMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  // const [prompts, setPrompts] = useState<Prompt[]>([]);

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

  // const fetchPrompts = async () => {
  //   try {
  //     const response = await fetch('https://67dc7283e00db03c40681d69.mockapi.io/ai-jewels/Prompt-options');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch prompts');
  //     }
  //     const data: Prompt[] = await response.json();
  //     // const data = await response.json();
  //     setPrompts(data);
  //     console.warn(data); // Check fetched data in the console
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchPrompts();
  // }, []);

  return (
    <AnimatePresence>
      <div className={`overflow-auto custom-scrollbar ${variant === 'promptmodepage' ? 'max-h-[14.4rem]' : 'h-full'}`}>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            key="prompt-menu"
            initial={variant === 'promptmodepage' ? { scaleY: 0 } : { scaleX: 0 }}
            animate={variant === 'promptmodepage' ? { scaleY: 1 } : { scaleX: 1 }}
            exit={variant === 'promptmodepage' ? { scaleY: 0 } : { scaleX: 0 }}
            transition={{ type: 'tween', duration: 0.6, ease: 'easeInOut' }}
            style={{ boxShadow: '0px 0px 9.8px 0px #37353540', transformOrigin: variant === 'promptmodepage' ? 'bottom' : 'left' }}
            className={`flex p-space-06 bg-special border border-[#1C212A] rounded-radius-md ${variant === 'litemodepage' ? 'w-[13rem] md:w-[15rem] lg:w-[17.687rem] h-full' : ''}`}
          >
            <div className="flex flex-col gap-space-06 w-full">
              <button type="button" className="flex justify-end cursor-pointer" onClick={toggleMenu}>
                <Image src="/assets/icons/close-vector.svg" alt="close-icon" width={14} height={14} />
              </button>
              <div className={`flex flex-wrap ${variant === 'litemodepage' ? 'grid grid-cols-2' : ''} gap-space-02`}>
                {PROMPTMENU_OPTIONS.map(option => (
                  <PromptMenuOption
                    key={option.id}
                    id={option.id}
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
