import Button from '../components/Button';
import Container from '../components/Container';
import FaqSection from '../components/FaqSection';
import StatsShowcase from '../components/StatsShowcase';
import { ABOUT_TEXT } from '../data/content';

export default function AboutPage() {
  const [stock, ...paragraphs] = ABOUT_TEXT;
  return (
    <div className="space-y-[clamp(4rem,9vw,11rem)]">
      <Container className="grid gap-8 pt-6 md:pt-[clamp(1.5rem,3vw,4rem)] lg:grid-cols-12">
        <div className="flex flex-col justify-between gap-8 lg:col-span-6">
          <h1 className="text-display font-bold">
            Who
            <br />
            are we?
          </h1>
          <div>
            <Button to="/contacts" block>
              Read reviews
            </Button>
          </div>
        </div>
        <div className="space-y-4 text-small md:text-body lg:col-span-6">
          <p>{stock}</p>
          {paragraphs.map((text) => (
            <p key={text.slice(0, 24)}>{text}</p>
          ))}
        </div>
      </Container>

      <StatsShowcase />
      <FaqSection />
    </div>
  );
}
