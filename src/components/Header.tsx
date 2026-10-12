import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { COMPANY, NAV_ITEMS } from '../data/content';
import { cx } from '../utils/format';
import Container from './Container';
import { CloseIcon, MenuIcon } from './icons';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cx(
    'relative text-nav after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:after:scale-x-100',
    isActive && 'font-bold after:scale-x-100',
  );

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // close the mobile menu when the route changes
  useEffect(() => setOpen(false), [pathname]);

  // close on Escape
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper">
      <Container className="flex h-14 items-center justify-between md:h-16 lg:grid lg:h-[clamp(4rem,6.9vw,8.25rem)] lg:grid-cols-[1fr_auto_1fr]">
        <Link to="/" className="text-[clamp(0.8125rem,1.4vw,1.625rem)] font-bold leading-none transition-opacity hover:opacity-60">
          {COMPANY.name}
        </Link>

        <nav aria-label="Main" className="hidden gap-[clamp(1.25rem,3.4vw,4rem)] lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={`tel:${COMPANY.headerPhone.replace(/[^+\d]/g, '')}`}
          className="hidden justify-self-end text-nav transition-opacity hover:opacity-60 lg:block"
        >
          {COMPANY.headerPhone}
        </a>

        <button
          type="button"
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-ink/5 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-b border-ink/10 bg-paper lg:hidden"
        >
          <Container className="flex flex-col gap-5 py-6">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cx('text-xl', isActive ? 'font-bold' : 'font-medium')}
              >
                {item.label}
              </NavLink>
            ))}
            <a href={`tel:${COMPANY.headerPhone.replace(/[^+\d]/g, '')}`} className="pt-2 text-base">
              {COMPANY.headerPhone}
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
