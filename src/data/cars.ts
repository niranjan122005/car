import corvette from '../assets/images/car-corvette.webp';
import toyota from '../assets/images/car-toyota.webp';
import charger from '../assets/images/car-charger.webp';
import dodge from '../assets/images/car-dodge.webp';
import wagon from '../assets/images/car-wagon.webp';
import thumbDodge from '../assets/images/thumb-dodge.webp';
import thumbCorvette from '../assets/images/thumb-corvette.webp';
import thumbWagon from '../assets/images/thumb-wagon.webp';
import thumbToyota from '../assets/images/thumb-toyota.webp';
import type { Car } from '../types';
import { ABOUT_TEXT } from './content';

const description = ABOUT_TEXT;

const baseSpecs = {
  make: 'Chevrolet',
  model: 'Chevelle SS',
  transmission: '4-speed manual',
  vin: '138176A142692',
  bodyColor: 'Red',
  engineSize: '427ci',
  year: 1966,
  type: 'Hardtop',
  interiorColor: 'Red',
};

const gallery = (hero: string) => [hero, thumbDodge, thumbWagon, thumbCorvette, thumbToyota];

/**
 * Placeholder inventory. Titles/prices mirror the Figma frames — replace with real data / an API call.
 */
export const cars: Car[] = [
  { id: 'c1', title: '1967 Toyota 2000GT', price: 39000, mileage: 14900, image: corvette, gallery: gallery(corvette), specs: baseSpecs, description },
  { id: 'c2', title: '1967 Toyota 2000GT', price: 66700, mileage: 14900, image: toyota, gallery: gallery(toyota), specs: baseSpecs, description },
  { id: 'c3', title: '1967 Toyota 2000GT', price: 39000, mileage: 14900, image: charger, gallery: gallery(charger), specs: baseSpecs, description },
  { id: 'c4', title: '1967 Toyota 2000GT', price: 66700, mileage: 14900, image: dodge, gallery: gallery(dodge), specs: baseSpecs, description },
  { id: 'c5', title: '1967 Toyota 2000GT', price: 39000, mileage: 14900, image: wagon, gallery: gallery(wagon), specs: baseSpecs, description },
  { id: 'c6', title: '1967 Toyota 2000GT', price: 66700, mileage: 14900, image: corvette, gallery: gallery(corvette), specs: baseSpecs, description },
  { id: 'c7', title: '1967 Toyota 2000GT', price: 39000, mileage: 14900, image: toyota, gallery: gallery(toyota), specs: baseSpecs, description },
  { id: 'c8', title: '1967 Toyota 2000GT', price: 66700, mileage: 14900, image: wagon, gallery: gallery(wagon), specs: baseSpecs, description },
];

/** Cars shown on the home page (first 5, followed by the "All cars" tile) */
export const featuredCars = cars.slice(0, 5);

export const getCarById = (id: string): Car | undefined => cars.find((car) => car.id === id);
