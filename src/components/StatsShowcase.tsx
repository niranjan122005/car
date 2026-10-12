import { STATS } from '../data/content';
import cutout from '../assets/images/classic-car-cutout.webp';
import Container from './Container';

/** Three outlined circles with the classic car overlapping them */
export default function StatsShowcase() {
  return (
    <Container as="section" className="overflow-hidden">
      <ul className="mx-auto grid max-w-[24rem] grid-cols-1 gap-4 px-0 md:max-w-none md:grid-cols-3 md:gap-[1.2vw] md:px-[3.2vw]">
        {STATS.map((stat) => (
          <li
            key={stat.label}
            className="flex aspect-square flex-col items-center justify-center rounded-full border border-ink/80 text-center transition-colors duration-300 hover:border-ink hover:bg-ink/5"
          >
            <p className="flex items-baseline gap-2 font-bold">
              <span className="text-stat">{stat.value}</span>
              {stat.suffix && <span className="text-card-title">{stat.suffix}</span>}
            </p>
            <p className="mt-2 text-stat-label md:mt-4">{stat.label}</p>
          </li>
        ))}
      </ul>
      <img
        src={cutout}
        alt="Classic black and white sedan"
        className="pointer-events-none relative z-10 -mt-[18vw] mx-auto w-full max-w-[34rem] md:-mt-[9vw] md:w-[72%] md:max-w-none"
      />
    </Container>
  );
}
