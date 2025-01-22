import React from 'react';

const activities = [
  'Attend a Live Event',
  'Grab a Coffee',
  'Check out a Gallery',
];

export default function Suggestions() {
  return (
    <div className="flex gap-2 items-center">
      <p className="text-sm">suggestions:</p>
      <div className="flex items-center gap-2">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white/5 cursor-pointer rounded-[8px] py-1 px-2 text-white text-sm"
          >
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
}
