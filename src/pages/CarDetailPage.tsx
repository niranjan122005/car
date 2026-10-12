import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import Container from '../components/Container';
import PageHeading from '../components/PageHeading';
import Pill from '../components/Pill';
import ServicesSection from '../components/ServicesSection';
import { useRequestModal } from '../context/RequestModalContext';
import { getCarById } from '../data/cars';
import type { Car } from '../types';
import { formatMiles, formatPrice } from '../utils/format';
import NotFoundPage from './NotFoundPage';

type SpecRow = [label: string, value: string];

const leftSpecs = (car: Car): SpecRow[] => [
  ['Make', car.specs.make],
  ['Model', car.specs.model],
  ['Transmission', car.specs.transmission],
  ['VIN', car.specs.vin],
  ['Body Color', car.specs.bodyColor],
];

const rightSpecs = (car: Car): SpecRow[] => [
  ['Mileage', formatMiles(car.mileage)],
  ['Engine Size', car.specs.engineSize],
  ['Year', String(car.specs.year)],
  ['Type', car.specs.type],
  ['Interior Color', car.specs.interiorColor],
];

function SpecList({ rows }: { rows: SpecRow[] }) {
  return (
    <dl className="space-y-3 text-small md:space-y-[clamp(0.75rem,1.4vw,1.75rem)] md:text-body">
      {rows.map(([label, value]) => (
        <div key={label} className="grid grid-cols-2 gap-4">
          <dt className="text-muted">{label}</dt>
          <dd className="font-bold">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function CarDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { openRequest } = useRequestModal();
  const car = id ? getCarById(id) : undefined;

  if (!car) {
    return (
      <NotFoundPage
        title="Car not found"
        message="This car is no longer available."
        action={
          <Button to="/cars" arrow>
            All cars
          </Button>
        }
      />
    );
  }

  const [main, ...thumbs] = car.gallery;

  return (
    <>
      <PageHeading title={car.title} />

      <section aria-label="Photos" className="grid gap-px bg-white md:grid-cols-2">
        <div className="group overflow-hidden">
          <img src={main} alt={`${car.title} — main photo`} className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
        </div>
        <div className="grid grid-cols-2 gap-px">
          {thumbs.map((src, index) => (
            <div key={src + index} className="group overflow-hidden">
              <img src={src} alt={`${car.title} — photo ${index + 2}`} loading="lazy" className="aspect-[481/299] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
            </div>
          ))}
        </div>
      </section>

      <Container className="mt-10 grid gap-10 md:mt-[clamp(2.5rem,5vw,6rem)] lg:grid-cols-2 lg:gap-[1.1vw]">
        <div className="flex flex-col border-t border-ink pt-5 md:pt-[clamp(1rem,1.5vw,2rem)]">
          <h2 className="text-item-title font-bold">{car.title}</h2>
          <div className="mt-5 md:mt-[clamp(1rem,1.6vw,2rem)]">
            <Pill>{formatPrice(car.price)}</Pill>
          </div>
          <div className="mt-8 grid gap-3 md:mt-[clamp(1.5rem,3.5vw,4rem)] md:grid-cols-2 md:gap-8 lg:grid-cols-1 xl:grid-cols-2">
            <SpecList rows={leftSpecs(car)} />
            <SpecList rows={rightSpecs(car)} />
          </div>
          <div className="mt-8 md:mt-[clamp(2rem,5vw,6rem)]">
            <Button block onClick={() => openRequest(`Rent: ${car.title}`)}>
              Rent
            </Button>
          </div>
        </div>

        <div className="border-t border-ink pt-5 md:pt-[clamp(1rem,1.5vw,2rem)]">
          <h2 className="text-item-title font-bold">About the car</h2>
          <div className="mt-6 space-y-4 text-small md:mt-[clamp(1.5rem,3vw,3.5rem)] md:text-body">
            {car.description.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <Link to="/cars" className="mt-8 inline-block text-small underline transition-opacity hover:opacity-60 md:text-body">
            ← Back to all cars
          </Link>
        </div>
      </Container>

      <div className="mt-[clamp(4rem,9vw,11rem)]">
        <ServicesSection />
      </div>
    </>
  );
}
