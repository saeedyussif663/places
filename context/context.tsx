'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Location = {
  longitude: null | number;
  latitude: null | number;
  town: string;
};

type AppContextType = {
  showLocationOverlay: boolean;
  setShowLocationOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  location: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
};

const AppContext = createContext<AppContextType>({
  showLocationOverlay: false,
  setShowLocationOverlay: () => {},
  location: { longitude: null, latitude: null, town: '' },
  setLocation: () => {},
});

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLocationOverlay, setShowLocationOverlay] = useState(false);
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
    town: '',
  });

  useEffect(() => {
    setShowLocationOverlay(true);
  }, []);

  return (
    <AppContext.Provider
      value={{
        showLocationOverlay,
        setShowLocationOverlay,
        location,
        setLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
