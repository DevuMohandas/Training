'use client';
import type { ReactNode } from 'react';
import { createContext, useState } from 'react';

type CardVisibilityContextType = {
  cardVisible: boolean;
  setCardVisible: (visible: boolean) => void;
  viewingImage: string;
  setViewingImage: (src: string) => void;
};

const CardVisibilityContext = createContext<CardVisibilityContextType | undefined>(undefined);

export const CardVisibilityProvider = ({ children }: { children: ReactNode }) => {
  const [cardVisible, setCardVisible] = useState(false);
  const [viewingImage, setViewingImage] = useState('');

  return (
    <CardVisibilityContext value={{ cardVisible, setCardVisible, viewingImage, setViewingImage }}>
      {children}
    </CardVisibilityContext>
  );
};

export default CardVisibilityContext;
