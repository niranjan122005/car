import AllCarsTile from '../components/AllCarsTile';
import Button from '../components/Button';
import CarGrid from '../components/CarGrid';
import Container from '../components/Container';
import FaqSection from '../components/FaqSection';
import FindUsSection from '../components/FindUsSection';
import ServicesSection from '../components/ServicesSection';
import StatsShowcase from '../components/StatsShowcase';
import { featuredCars } from '../data/cars';

export default function HomePage() {
  return (
    <>
      <Container className="pb-8 pt-6 md:pb-[clamp(2rem,6vw,7rem)] md:pt-[clamp(1.5rem,3.5vw,4.5rem)]">
        <h1 className="text-display font-bold">Retro cars 1960-1970</h1>
        <div className="mt-4 flex flex-col items-start gap-5 md:mt-[clamp(1.5rem,3vw,3.5rem)] md:flex-row md:items-center md:gap-6">
          <p className="text-body md:max-w-[11em]">Vintage retro cars USA</p>
          <Button to="/cars" variant="responsiveDark" arrow block>
            Find a car
          </Button>
        </div>
      </Container>

      <CarGrid cars={featuredCars} extra={<AllCarsTile />} />

      <div className="space-y-[clamp(4rem,9vw,11rem)] pt-[clamp(4rem,9vw,11rem)]">
        <section aria-labelledby="numbers-title">
          <Container className="grid gap-6 pb-10 md:pb-[clamp(2rem,5vw,6rem)] lg:grid-cols-12">
            <h2 id="numbers-title" className="text-h2 font-bold lg:col-span-8">
              About us
              <br />
              in numbers
            </h2>
            <p className="text-body lg:col-span-3 lg:col-start-9 lg:self-start">
              From acquisition to restoration, we specialize in iconic automobiles, ensuring each drive is a
              celebration of timeless style. Elevate your journey with our passion for preserving automotive
              heritage.
            </p>
          </Container>
          <StatsShowcase />
        </section>

        <ServicesSection />
        <FaqSection />
        <FindUsSection />
      </div>
    </>
  );
}
