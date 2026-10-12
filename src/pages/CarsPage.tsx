import CarGrid from '../components/CarGrid';
import PageHeading from '../components/PageHeading';
import Pill from '../components/Pill';
import { TOTAL_CARS } from '../data/content';
import { cars } from '../data/cars';

export default function CarsPage() {
  return (
    <>
      <PageHeading title="Our cars" aside={<Pill className="self-start md:self-auto">{TOTAL_CARS} cars</Pill>} />
      <CarGrid cars={cars} />
    </>
  );
}
