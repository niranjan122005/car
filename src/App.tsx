import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { RequestModalProvider } from './context/RequestModalContext';
import AboutPage from './pages/AboutPage';
import CarDetailPage from './pages/CarDetailPage';
import CarsPage from './pages/CarsPage';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ServicesPage from './pages/ServicesPage';

export default function App() {
  return (
    <RequestModalProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cars" element={<CarsPage />} />
          <Route path="cars/:id" element={<CarDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </RequestModalProvider>
  );
}
