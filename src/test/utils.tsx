import { render } from '@testing-library/react';
import type { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { RequestModalProvider } from '../context/RequestModalContext';

export const renderWithProviders = (ui: ReactElement, route = '/') =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <RequestModalProvider>{ui}</RequestModalProvider>
    </MemoryRouter>,
  );
