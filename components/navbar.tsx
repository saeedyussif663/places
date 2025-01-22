'use client';

import { MapPinLine } from '@phosphor-icons/react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="h-[112px] flex justify-between items-center w-full sticky px-10">
      <Image src={'/logo.png'} alt="logo" width={176} height={43} />
      <div className="flex items-center gap-2">
        <MapPinLine size={24} />
        <p className="font-medium text-xl text-[#D7D7D7]">kasoa</p>
      </div>
    </nav>
  );
}
