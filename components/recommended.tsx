'use client';

import { useGlobalContext } from '@/context/context';
import {
  CalendarDots,
  ClockCountdown,
  Door,
  MapPinLine,
  Star,
} from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Recommended() {
  const { places } = useGlobalContext();

  return (
    <section className="mt-10 px-4 md:px-10 max-w-screen-2xl mx-auto">
      <h5 className="text-2xl">Recommended places</h5>

      <div className="mt-[30px] flex flex-col  flex-wrap md:flex-row items-center gap-10">
        {places.length === 0 ? (
          <p className="text-[#B6B6B6]">search for your favorite place</p>
        ) : (
          places.map((item, index) => (
            <Link
              target="_blank"
              href={item.directions_url}
              key={index}
              className="rounded-[16px] flex flex-col  gap-4 bg-white/[0.05]    p-3 w-full md:w-[302px]"
            >
              {item.photo_url ? (
                <div className="relative w-full h-[200px]">
                  <Image
                    src={item.photo_url}
                    alt="image"
                    fill
                    className="rounded-[8px]"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center text-[#929292] w-full h-[200px]">
                  no image
                </div>
              )}
              <div className="flex text-sm  md:text-base flex-col gap-2">
                <h5 className="line-clamp-1">{item.name}</h5>

                <div className="flex items-center gap-2 text-[#929292]">
                  <Door size={18} className="flex-shrink-0" />
                  <p>{item.is_open_now ? 'open' : 'closed'}</p>
                </div>

                <div className="flex items-center gap-2 text-[#929292]">
                  <MapPinLine size={18} className="flex-shrink-0" />
                  <p className="line-clamp-1">{item.address}</p>
                </div>

                <div className="flex items-center gap-2 text-[#929292]">
                  <Star size={18} className="flex-shrink-0" />
                  <p className="line-clamp-1">{item.rating}</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
