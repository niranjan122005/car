import { SERVICES } from '../data/content';
import { useRequestModal } from '../context/RequestModalContext';
import Button from './Button';
import Container from './Container';

interface ServicesSectionProps {
  /** Render the title as the page <h1> (Services page) instead of an <h2> */
  asPageTitle?: boolean;
  /** Filled button on desktop too (Services page); outline otherwise */
  solidButton?: boolean;
}

export default function ServicesSection({ asPageTitle = false, solidButton = false }: ServicesSectionProps) {
  const { openRequest } = useRequestModal();
  const Heading = asPageTitle ? 'h1' : 'h2';
  const variant = solidButton ? 'dark' : 'responsiveDark';
  const apply = () => openRequest('Services');

  return (
    <Container as="section" className="space-y-[clamp(1.5rem,2.5vw,3rem)]">
      <div className="flex items-center justify-between gap-4">
        <Heading className={asPageTitle ? 'text-display font-bold' : 'text-h2 font-bold'}>Services</Heading>
        <Button variant={variant} onClick={apply} className="hidden md:inline-flex">
          Submit your application
        </Button>
      </div>

      <ul className="grid gap-4 min-[520px]:grid-cols-3 md:gap-[1.05vw]">
        {SERVICES.map((service) => (
          <li key={service.id} className="group relative aspect-[588/507] overflow-hidden rounded-lg">
            <img src={service.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent transition-colors duration-500 group-hover:from-black/75" />
            <h3 className="absolute bottom-0 left-0 p-[clamp(1rem,1.9vw,2.25rem)] text-item-title font-bold uppercase text-white transition-transform duration-300 group-hover:-translate-y-1">
              {service.title}
            </h3>
          </li>
        ))}
      </ul>

      <Button variant="dark" block onClick={apply} className="md:hidden">
        Submit your application
      </Button>
    </Container>
  );
}
