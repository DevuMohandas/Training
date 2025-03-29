import CardVisibilityContext from '@/context/cardVisibilityContext';
import { useContext } from 'react';

export const useCardVisibility = () => {
  const context = useContext(CardVisibilityContext);
  if (!context) {
    throw new Error ('useCardVisibility must be used within a CardVisibilityProvider');
  }
  return context;
};
