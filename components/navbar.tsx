'use client';

import { useGlobalContext } from '@/context/context';
import { MapPinLine } from '@phosphor-icons/react';
import Image from 'next/image';

export default function Navbar() {
  const { location } = useGlobalContext();

  return (
    <nav className="h-[112px] max-w-screen-2xl mx-auto flex justify-between items-center w-full  px-4 md:px-10">
      <Image src={'/logo.png'} alt="logo" width={176} height={43} />
      <div className="flex items-center gap-2">
        <MapPinLine size={24} />
        <p className="font-medium text-sm md:text-xl text-[#D7D7D7]">
          {location.town || 'Allow access'}
        </p>
      </div>
    </nav>
  );
}
