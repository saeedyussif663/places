'use client';

import { Copyright } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <div className="px-4 md:px-10 mt-20 max-w-screen-2xl mx-auto">
      <footer className="flex items-center text-sm md:text-lg text-[#B6B6B6] justify-between pt-6  border-t border-white">
        <div className="flex gap-2 items-center">
          <Copyright size={16} />
          <p>2025</p>
          <p>Places</p>
        </div>
        <div className="flex gap-2 items-center">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}
