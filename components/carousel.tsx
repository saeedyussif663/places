import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function CarouselDemo() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="h-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <img
              src="/placeholder.png"
              className="h-[230px] w-full rounded-[16px]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-transparent" />
      <CarouselNext className="bg-transparent" />
    </Carousel>
  );
}
