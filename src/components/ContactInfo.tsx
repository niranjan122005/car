import { COMPANY } from '../data/content';
import { useRequestModal } from '../context/RequestModalContext';
import Button from './Button';

interface ContactInfoProps {
  solidButton?: boolean;
}

export default function ContactInfo({ solidButton = false }: ContactInfoProps) {
  const { openRequest } = useRequestModal();
  return (
    <div className="space-y-3 md:space-y-[clamp(0.75rem,1vw,1.5rem)]">
      <a
        href={`tel:${COMPANY.phone.replace(/[^+\d]/g, '')}`}
        className="block text-[clamp(1rem,1.5vw,1.75rem)] font-semibold transition-opacity hover:opacity-60"
      >
        {COMPANY.phone}
      </a>
      <p className="text-small md:text-nav">{COMPANY.address}</p>
      <div className="pt-3 md:pt-[clamp(1rem,2.5vw,3rem)]">
        <Button variant={solidButton ? 'dark' : 'responsiveDark'} block onClick={() => openRequest('Contact')}>
          Submit your application
        </Button>
      </div>
    </div>
  );
}
