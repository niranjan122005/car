import type { ReactNode } from 'react';
import Container from './Container';

interface PageHeadingProps {
  title: ReactNode;
  /** content aligned to the right of the title on desktop */
  aside?: ReactNode;
}

export default function PageHeading({ title, aside }: PageHeadingProps) {
  return (
    <Container className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between md:py-[clamp(1.5rem,3.5vw,4.5rem)]">
      <h1 className="text-display font-bold">{title}</h1>
      {aside}
    </Container>
  );
}
