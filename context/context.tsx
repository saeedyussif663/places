'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Location = {
  longitude: null | number;
  latitude: null | number;
  town: string;
};

interface Place {
  address: string;
  directions_url: string;
  is_open_now: boolean;
  name: string;
  photo_url: string;
  rating: number;
}

type AppContextType = {
  showLocationOverlay: boolean;
  setShowLocationOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  location: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  places: Place[];
  fetchPlaces: (activity: string) => void;
};

const AppContext = createContext<AppContextType>({
  showLocationOverlay: false,
  setShowLocationOverlay: () => {},
  location: { longitude: null, latitude: null, town: '' },
  setLocation: () => {},
  loading: false,
  setLoading: () => {},
  places: [],
  fetchPlaces: () => null,
});

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLocationOverlay, setShowLocationOverlay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
    town: '',
  });
  const [places, setPlaces] = useState([]);

  async function fetchPlaces(activity: string) {
    setLoading(true);
    try {
      const res = await fetch(
        `https://active-app-production.up.railway.app/suggestions/?latitude=${location.latitude}&longitude=${location.longitude}&activity=${activity}`
      );

      if (!res.ok) {
        throw Error('An error occured');
      }

      const data = await res.json();
      if (data.places.length > 8) {
        const elements = data.places.slice(0, 8);
        console.log(elements);
        setPlaces(elements);
      } else {
        setPlaces(data.places);
      }
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  }

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
        loading,
        setLoading,
        places,
        fetchPlaces,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
