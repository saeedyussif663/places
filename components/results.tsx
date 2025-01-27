'use client';

import {
  ArrowUpRight,
  ClockCountdown,
  MapPinLine,
  Star,
} from '@phosphor-icons/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { CarouselDemo } from './carousel';
import { useGlobalContext } from '@/context/context';

export default function Results() {
  const [isActive, setIsActive] = useState(true);

  return (
    <section className="w-full p-3 md:w-[500px] flex items-center justify-center z-50  bg-[#1C1C1C] border rounded-[16px] border-[#ACFFF1]/10">
      {/* no content */}
      {!isActive && (
        <div className="flex flex-col gap-5">
          <div className="px-10 py-6 flex justify-center items-center rounded-[16px]">
            <Image
              src={'/empty.png'}
              alt="empty image"
              width={63}
              height={80}
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          <p className="text-center text-[#B6B6B6] text-lg">
            Results will display here
          </p>
        </div>
      )}

      {/* with content */}
      {isActive && (
        <div className="flex flex-col gap-4 justify-between">
          {/* image */}
          <CarouselDemo />

          {/* text */}

          <div className="py-4 space-y-4 mt-6">
            <div className="flex justify-between items-start">
              <h3 className="w-3/4 font-semibold text-lg md:text-4xl">
                The Haus Cowork & Cafe
              </h3>
              <div className="rounded-[4px] p-2 mt-1 bg-white/5 flex items-center gap-2">
                <p className="text-xs font-semibold">View on map</p>
                <ArrowUpRight size={16} />
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#929292]">
              <Star weight="fill" />
              <p>5.4 ratings</p>
            </div>
            <div className="flex items-center gap-2 text-[#929292]">
              <MapPinLine weight="fill" />
              <p>40 Jungle Avenue</p>
            </div>
            <div className="flex items-center gap-2 text-[#929292]">
              <ClockCountdown weight="fill" />
              <p>Open</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
