import type { ReactNode } from 'react';
import Button from '../components/Button';
import Container from '../components/Container';

interface NotFoundPageProps {
  title?: string;
  message?: string;
  action?: ReactNode;
}

export default function NotFoundPage({
  title = 'Page not found',
  message = 'The page you are looking for does not exist.',
  action,
}: NotFoundPageProps) {
  return (
    <Container className="space-y-6 py-[clamp(3rem,8vw,8rem)]">
      <h1 className="text-h2 font-bold">{title}</h1>
      <p className="text-body">{message}</p>
      {action ?? (
        <Button to="/" arrow>
          Back to home
        </Button>
      )}
    </Container>
  );
}
