import Container from './Container';
import ContactInfo from './ContactInfo';
import MapEmbed from './MapEmbed';

export default function FindUsSection() {
  return (
    <section className="flex flex-col gap-8 md:gap-[clamp(1.5rem,3vw,4rem)]">
      <div className="order-2 md:order-1">
        <Container className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <h2 className="text-h2 font-bold lg:col-span-8">
            Where
            <br />
            to find us
          </h2>
          <div className="lg:col-span-3 lg:col-start-10">
            <ContactInfo />
          </div>
        </Container>
      </div>
      <div className="order-1 md:order-2">
        <MapEmbed />
      </div>
    </section>
  );
}
