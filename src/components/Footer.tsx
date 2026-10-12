import { Link } from 'react-router-dom';
import { COMPANY, FOOTER_LINKS } from '../data/content';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="mt-[clamp(3rem,6vw,8rem)]">
      <Container>
        <div className="grid gap-y-6 border-t border-ink/20 pb-10 pt-8 lg:grid-cols-12 lg:gap-y-0 lg:pb-[clamp(2rem,4vw,5rem)] lg:pt-[clamp(1.5rem,2.2vw,3rem)]">
          <p className="text-[clamp(0.875rem,1.4vw,1.625rem)] font-bold leading-tight lg:col-span-4 lg:row-start-1">
            {COMPANY.name}
          </p>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-6 text-nav lg:col-span-5 lg:row-span-3 lg:row-start-1 lg:flex lg:gap-x-[3.4vw]"
          >
            {FOOTER_LINKS.map((column, index) => (
              <ul key={index} className="flex flex-col gap-4 lg:gap-[clamp(1.5rem,2.2vw,3rem)]">
                {column.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="transition-opacity hover:opacity-60">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>

          <div className="space-y-2 lg:col-span-3 lg:row-span-3 lg:row-start-1">
            <a
              href={`tel:${COMPANY.phone.replace(/[^+\d]/g, '')}`}
              className="block text-[clamp(1rem,1.4vw,1.625rem)] font-semibold transition-opacity hover:opacity-60"
            >
              {COMPANY.phone}
            </a>
            <p className="text-small lg:text-nav">{COMPANY.address}</p>
          </div>

          <a
            href="#privacy"
            className="text-small underline transition-opacity hover:opacity-60 lg:col-span-4 lg:col-start-1 lg:row-start-2 lg:mt-[clamp(1rem,1.5vw,2rem)]"
          >
            Privacy Policies
          </a>

          <p className="text-small text-muted lg:col-span-4 lg:col-start-1 lg:row-start-3 lg:self-end">
            © {COMPANY.name} {COMPANY.year}
          </p>
        </div>
      </Container>
    </footer>
  );
}
