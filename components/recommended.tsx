'use client';

import { CalendarDots, ClockCountdown } from '@phosphor-icons/react';
import Image from 'next/image';
import { useState } from 'react';

const tabs = ['Coworking spaces', 'Coffee Café', 'Restaurants'];

export default function Recommended() {
  const [active, setActive] = useState('Coworking spaces');
  return (
    <section className="mt-10 px-4 md:px-10">
      <div>
        <h5 className="text-2xl">Recommended places</h5>
        <div className="mt-4 flex items-center gap-2">
          {tabs.map((item, index) => (
            <div
              key={index}
              className={`rounded-[4px] py-1 px-2 text-[8px] md:text-sm cursor-pointer ${
                active === item && 'bg-white/5'
              }`}
              onClick={() => setActive(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[30px] flex flex-col md:flex-row items-center gap-4">
        {[0, 1, 3].map((item) => (
          <div
            key={item}
            className="rounded-[16px] flex gap-4 bg-white/[0.05]  md:flex-col p-3 w-full md:w-[302px]"
          >
            <Image
              src={'/placeholder.png'}
              alt="image"
              width={126}
              height={75}
              style={{ width: 'auto', height: 'auto' }}
              className="rounded-[8px]"
            />
            <div className="flex text-sm md:text-base flex-col gap-2">
              <h5>The Haus Cowork & Cafe</h5>

              <div className="flex items-center gap-2 text-[#929292]">
                <CalendarDots size={18} />
                <p>Mondays - Sundays</p>
              </div>

              <div className="flex items-center gap-2 text-[#929292]">
                <ClockCountdown size={18} />
                <p>8:00AM - 9:00PM</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
