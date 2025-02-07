'use client';

import { useGlobalContext } from '@/context/context';
import {
  ArrowUpRight,
  ClockCountdown,
  MapPinLine,
  Star,
} from '@phosphor-icons/react';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Results() {
  const { loading, places } = useGlobalContext();

  const highestRatedPlace = places.reduce(
    (max, place) => (place.rating > max.rating ? place : max),
    places[0]
  );

  return (
    <section className="w-full p-3 min-h-[400px] md:w-[500px] flex items-center justify-center z-50  bg-[#1C1C1C] border rounded-[16px] border-[#ACFFF1]/10">
      {/* no content */}
      {places.length === 0 && !loading && (
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

      {loading && <Loader size={30} className="animate-spin" />}

      {/* with content */}
      {places.length > 0 && !loading && (
        <div className="flex flex-col w-full gap-4 justify-between">
          {/* image */}

          {highestRatedPlace.photo_url ? (
            <div className="relative h-[230px]">
              <Image
                src={highestRatedPlace.photo_url}
                alt={highestRatedPlace.name}
                fill
                className="rounded-lg"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center text-[#929292] w-full h-[230px]">
              no image
            </div>
          )}

          {/* text */}

          <div className="py-4 space-y-4 mt-6">
            <div className="flex justify-between items-start">
              <h3 className="w-3/4 font-semibold text-lg md:text-4xl">
                {highestRatedPlace.name}
              </h3>
              <div className="rounded-[4px] p-2 mt-1 bg-white/5 flex items-center gap-2">
                <Link
                  target="_blank"
                  href={highestRatedPlace.directions_url}
                  className="text-xs font-semibold"
                >
                  View on map
                </Link>
                <ArrowUpRight size={16} />
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#929292]">
              <Star weight="fill" />
              <p>{highestRatedPlace.rating}</p>
            </div>
            <div className="flex items-center gap-2 text-[#929292]">
              <MapPinLine weight="fill" />
              <p>{highestRatedPlace.address}</p>
            </div>
            <div className="flex items-center gap-2 text-[#929292]">
              <ClockCountdown />
              <p>{highestRatedPlace.is_open_now ? 'open' : 'closed'}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
