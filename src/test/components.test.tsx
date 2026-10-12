import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../components/Button';
import CarCard from '../components/CarCard';
import FaqSection from '../components/FaqSection';
import Header from '../components/Header';
import MapEmbed, { mapSrc } from '../components/MapEmbed';
import { cars } from '../data/cars';
import { FAQS } from '../data/content';
import { renderWithProviders } from './utils';

describe('Button', () => {
  it('renders a link when `to` is provided', () => {
    renderWithProviders(<Button to="/cars">Find a car</Button>);
    expect(screen.getByRole('link', { name: 'Find a car' })).toHaveAttribute('href', '/cars');
  });

  it('renders a button and fires onClick', async () => {
    const onClick = vi.fn();
    renderWithProviders(<Button onClick={onClick}>Click</Button>);
    await userEvent.click(screen.getByRole('button', { name: 'Click' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe('Header', () => {
  it('shows the desktop navigation links', () => {
    renderWithProviders(<Header />);
    const nav = screen.getByRole('navigation', { name: 'Main' });
    ['Cars', 'About Us', 'Services', 'Contacts'].forEach((label) =>
      expect(nav).toHaveTextContent(label),
    );
  });

  it('toggles the mobile menu', async () => {
    renderWithProviders(<Header />);
    const toggle = screen.getByRole('button', { name: 'Open menu' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument();

    await userEvent.click(toggle);
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument();
  });

  it('closes the mobile menu after choosing a link', async () => {
    renderWithProviders(<Header />);
    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    const mobile = screen.getByRole('navigation', { name: 'Mobile' });
    await userEvent.click(mobile.querySelector('a[href="/about"]') as HTMLElement);
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument();
  });
});

describe('FaqSection', () => {
  it('opens one answer at a time and can collapse it', async () => {
    renderWithProviders(<FaqSection />);
    const last = FAQS[FAQS.length - 1];
    const first = FAQS[0];

    // last item is expanded by default (as in the design)
    expect(screen.getByRole('button', { name: last.question })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(last.answer)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: first.question }));
    expect(screen.getByRole('button', { name: first.question })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: last.question })).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText(last.answer)).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: first.question }));
    expect(screen.queryByText(first.answer)).not.toBeInTheDocument();
  });
});

describe('CarCard', () => {
  it('shows price, title, mileage and links to the detail page', () => {
    const car = cars[0];
    renderWithProviders(<CarCard car={car} />);
    expect(screen.getByText('$39 000')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: car.title })).toHaveAttribute('href', `/cars/${car.id}`);
    expect(screen.getByText('14,900 miles')).toBeInTheDocument();
  });

  it('opens the request form from the Rent button', async () => {
    renderWithProviders(<CarCard car={cars[0]} />);
    await userEvent.click(screen.getByRole('button', { name: /rent/i }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(`Rent: ${cars[0].title}`)).toBeInTheDocument();
  });
});

describe('MapEmbed', () => {
  it('renders a live map iframe for the company address', () => {
    renderWithProviders(<MapEmbed />);
    const frame = screen.getByTitle(/map:/i);
    expect(frame.tagName).toBe('IFRAME');
    expect(frame).toHaveAttribute('src', mapSrc('161 Trumpeter Ave, Soldotna, Alaska'));
    expect(frame.getAttribute('src')).toContain('output=embed');
  });
});
