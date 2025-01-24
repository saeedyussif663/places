'use client';

import { useGlobalContext } from '@/context/context';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Locationoverlay() {
  const { showLocationOverlay, setShowLocationOverlay, setLocation } =
    useGlobalContext();

  function handleAllowAccess() {
    setShowLocationOverlay(false);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => alert('an error occured getting your location')
      );
    }
  }

  return (
    <section
      className={`h-screen pt-6 md:pt-32 w-screen bg-[#1c1c1c]/80 backdrop-blur-sm fixed top-0 z-[100] ${
        showLocationOverlay ? 'flex' : 'hidden'
      } flex justify-center`}
    >
      <div className="w-full md:w-[609px] flex flex-col space-y-10 p-10 h-min">
        <div className="relative size-[100px] self-center md:size-[200px]">
          <Image src={'/overlay.png'} alt="overlay" fill className="mx-auto" />
        </div>

        <div className="space-y-2">
          <h5 className="font-semibold text-lg md:text-2xl text-center">
            Allow Places to access your location
          </h5>
          <p className="text-center text-sm md:text-base text-[#DDDDDD]">
            To give you the best recommendations nearby, we need to know your
            location. Don’t worry, your privacy is our priority, and we’ll only
            use it to find great places around you
          </p>
        </div>

        <div className="w-full space-y-2 font-medium">
          <button
            className="w-full text-black rounded-[12px] bg-white py-4 px-6"
            onClick={handleAllowAccess}
          >
            Enable location access
          </button>

          <button
            className="w-full py-4 px-6 text-[#D8D8D8]"
            onClick={() => setShowLocationOverlay(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}
