import { COMPANY } from '../data/content';
import Container from './Container';

export const mapSrc = (query: string): string =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=13&output=embed`;

/** Live, interactive map (drag, zoom, pin) — no API key needed */
export default function MapEmbed() {
  return (
    <Container>
      <iframe
        title={`Map: ${COMPANY.address}`}
        src={mapSrc(COMPANY.mapQuery)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="block aspect-[4/3] w-full border-0 md:aspect-[1806/700]"
      />
    </Container>
  );
}
