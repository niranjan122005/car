import ContactInfo from '../components/ContactInfo';
import Container from '../components/Container';
import MapEmbed from '../components/MapEmbed';

export default function ContactsPage() {
  return (
    <div className="space-y-8 md:space-y-[clamp(1.5rem,3vw,4rem)]">
      <Container className="grid gap-6 pt-6 md:pt-[clamp(1.5rem,3.5vw,4.5rem)] lg:grid-cols-12 lg:items-start">
        <h1 className="text-display font-bold lg:col-span-8">Contacts</h1>
        <div className="lg:col-span-3 lg:col-start-10">
          <ContactInfo solidButton />
        </div>
      </Container>
      <MapEmbed />
    </div>
  );
}
