import Image from 'next/image';
import React from 'react';

export default function Results() {
  return (
    <section className="w-full md:w-[500px] flex items-center justify-center z-50 h-[320px] md:h-[500px] bg-[#1C1C1C] border rounded-[16px] border-[#ACFFF1]/10">
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
    </section>
  );
}
