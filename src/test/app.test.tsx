import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

const renderApp = (route = '/') =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );

describe('App routing', () => {
  it('renders the home page', () => {
    renderApp();
    expect(screen.getByRole('heading', { level: 1, name: 'Retro cars 1960-1970' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /about us\s*in numbers/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'FAQ' })).toBeInTheDocument();
    expect(screen.getByText('29 more cars')).toBeInTheDocument();
  });

  it('navigates from the header to every page', async () => {
    renderApp();
    const nav = screen.getByRole('navigation', { name: 'Main' });

    await userEvent.click(within(nav).getByRole('link', { name: 'Cars' }));
    expect(screen.getByRole('heading', { level: 1, name: 'Our cars' })).toBeInTheDocument();
    expect(screen.getByText('32 cars')).toBeInTheDocument();

    await userEvent.click(within(nav).getByRole('link', { name: 'About Us' }));
    expect(screen.getByRole('heading', { level: 1, name: /who\s*are we\?/i })).toBeInTheDocument();

    await userEvent.click(within(nav).getByRole('link', { name: 'Services' }));
    expect(screen.getByRole('heading', { level: 1, name: 'Services' })).toBeInTheDocument();

    await userEvent.click(within(nav).getByRole('link', { name: 'Contacts' }));
    expect(screen.getByRole('heading', { level: 1, name: 'Contacts' })).toBeInTheDocument();
  });

  it('opens a car detail page from the cars list', async () => {
    renderApp('/cars');
    await userEvent.click(screen.getAllByRole('link', { name: '1967 Toyota 2000GT' })[0]);
    expect(screen.getByRole('heading', { level: 1, name: '1967 Toyota 2000GT' })).toBeInTheDocument();
    expect(screen.getByText('About the car')).toBeInTheDocument();
    expect(screen.getByText('Chevrolet')).toBeInTheDocument();
  });

  it('shows a message for an unknown car and unknown route', () => {
    const first = renderApp('/cars/does-not-exist');
    expect(screen.getByRole('heading', { name: 'Car not found' })).toBeInTheDocument();
    first.unmount();
    renderApp('/nope');
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });

  it('home "Find a car" button goes to the cars page', async () => {
    renderApp();
    await userEvent.click(screen.getByRole('link', { name: /find a car/i }));
    expect(screen.getByRole('heading', { level: 1, name: 'Our cars' })).toBeInTheDocument();
  });
});

describe('Request form', () => {
  it('validates required fields, then shows a confirmation', async () => {
    renderApp('/services');
    const apply = screen.getAllByRole('button', { name: 'Submit your application' })[0];
    await userEvent.click(apply);

    const dialog = screen.getByRole('dialog');
    await userEvent.click(within(dialog).getByRole('button', { name: 'Send' }));
    expect(within(dialog).getByText('Please enter your name')).toBeInTheDocument();
    expect(within(dialog).getByText('Please enter a valid phone number')).toBeInTheDocument();

    await userEvent.type(within(dialog).getByLabelText('Name'), 'John');
    await userEvent.type(within(dialog).getByLabelText('Phone'), '+1 240 375 1288');
    await userEvent.click(within(dialog).getByRole('button', { name: 'Send' }));
    expect(within(dialog).getByText(/thank you, john/i)).toBeInTheDocument();

    await userEvent.click(within(dialog).getByRole('button', { name: 'Close' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes with Escape', async () => {
    renderApp('/contacts');
    await userEvent.click(screen.getByRole('button', { name: 'Submit your application' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
