import type { ReactNode } from 'react';
import type { Car } from '../types';
import CarCard from './CarCard';

interface CarGridProps {
  cars: Car[];
  /** extra tile rendered after the cars (e.g. the "All cars" tile on the home page) */
  extra?: ReactNode;
}

export default function CarGrid({ cars, extra }: CarGridProps) {
  return (
    <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-4 md:gap-px md:bg-white" data-testid="car-grid">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
      {extra}
    </div>
  );
}
