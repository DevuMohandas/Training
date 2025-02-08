'use client'; // This is required since Next.js 13+ uses server components by default.

import { Provider } from 'react-redux';
import { store } from './redux/store'; // Adjust the path if needed

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
