'use client';
import { ThemeModeIcon } from '@/assets/TopBarIcons';
import { useEffect, useState } from 'react';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState('multicolor');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'multicolor' ? 'bw' : 'multicolor'));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex justify-center w-[2rem] h-[1.875rem] rounded-[10px] bg-card"
    >
      <div className="m-1"><ThemeModeIcon className="color-icon w-[24px] h-[24px]" /></div>
    </button>
  );
};

export default ThemeToggleButton;
