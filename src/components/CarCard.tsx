import { Link } from 'react-router-dom';
import { useRequestModal } from '../context/RequestModalContext';
import type { Car } from '../types';
import { formatMiles, formatPrice } from '../utils/format';
import Button from './Button';
import Pill from './Pill';

interface CarCardProps {
  car: Car;
}

/**
 * Mobile: photo on top, details underneath.
 * Tablet/desktop: details overlay the photo (as in the Figma frames).
 */
export default function CarCard({ car }: CarCardProps) {
  const { openRequest } = useRequestModal();

  return (
    <article className="group relative overflow-hidden md:aspect-[16/9]">
      <img
        src={car.image}
        alt={car.title}
        loading="lazy"
        className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 md:absolute md:inset-0 md:aspect-auto md:h-full"
      />
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-black/60 via-black/5 to-transparent transition-colors duration-500 group-hover:from-black/75 md:block" />

      <div className="px-4 pt-3 md:absolute md:inset-x-0 md:bottom-0 md:p-gutter md:text-white">
        <p className="text-card-price">{formatPrice(car.price)}</p>
        <h3 className="mt-1 text-card-title font-bold md:mt-2">
          <Link to={`/cars/${car.id}`} className="underline-offset-4 after:absolute after:inset-0 after:content-[''] group-hover:underline">
            {car.title}
          </Link>
        </h3>

        <div className="mt-3 flex flex-col items-start gap-4 md:mt-5 md:flex-row md:items-center md:gap-3">
          <Pill tone="onImage" className="md:order-2">
            {formatMiles(car.mileage)}
          </Pill>
          <Button
            variant="rent"
            arrow
            className="relative z-10 w-full md:order-1 md:w-auto"
            onClick={() => openRequest(`Rent: ${car.title}`)}
          >
            Rent
          </Button>
        </div>
      </div>
    </article>
  );
}
