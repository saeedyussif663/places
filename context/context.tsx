'use client';

import { createContext, useContext } from 'react';

const AppContext = createContext('');

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppContext.Provider value="some">{children}</AppContext.Provider>;
}

export function useGlobalContext() {
  return useContext(AppContext);
}
