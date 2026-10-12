import { TOTAL_CARS } from '../data/content';
import cutout from '../assets/images/classic-car-cutout.webp';
import Button from './Button';
import Pill from './Pill';

/** Dark "All cars / N more cars" tile that closes the home page car grid */
export default function AllCarsTile() {
  const more = TOTAL_CARS - 3;
  return (
    <>
      <div className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-ink md:aspect-[16/9] md:items-end md:justify-start">
        <img
          src={cutout}
          alt=""
          className="w-[75%] opacity-20 transition-opacity duration-500 group-hover:opacity-35 md:absolute md:left-1/2 md:top-1/2 md:w-[62%] md:-translate-x-1/2 md:-translate-y-[60%]"
        />
        <div className="absolute bottom-4 left-4 flex items-center gap-3 md:static md:p-gutter">
          <Button to="/cars" variant="white" arrow className="hidden md:inline-flex">
            All cars
          </Button>
          <Pill tone="inverse">
            {more} more cars
          </Pill>
        </div>
      </div>
      <div className="px-4 sm:col-span-2 md:hidden">
        <Button to="/cars" arrow block>
          All cars
        </Button>
      </div>
    </>
  );
}
