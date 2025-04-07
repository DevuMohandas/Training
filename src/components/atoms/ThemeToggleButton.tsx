'use client';
import { ThemeModeIcon } from '@/assets/TopBarIcons';
import { useEffect, useState } from 'react';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<string>('none');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'none';
    setTheme(storedTheme);
    document.documentElement.classList.toggle('bw', storedTheme === 'bw');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'bw' ? 'none' : 'bw';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'bw') {
      document.documentElement.classList.add('bw');
    } else {
      document.documentElement.classList.remove('bw');
    }
  };

  return (
    <button
      type="button"
      aria-label="theme-Toggle-Button"
      onClick={toggleTheme}
      className="flex justify-center items-center w-[2rem] h-[1.875rem] rounded-radius-md bg-card cursor-pointer"
    >
      <div><ThemeModeIcon className="color-icon w-[1.125rem] h-[1.125rem]" /></div>
    </button>
  );
};

export default ThemeToggleButton;
