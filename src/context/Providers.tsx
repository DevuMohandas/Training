import { CardVisibilityProvider } from './cardVisibilityContext';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CardVisibilityProvider>
      {children}
    </CardVisibilityProvider>
  );
};

export default Providers;
