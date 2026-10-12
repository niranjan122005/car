import { useState } from 'react';
import { FAQS } from '../data/content';
import { useRequestModal } from '../context/RequestModalContext';
import Button from './Button';
import Container from './Container';
import { Minus, Plus } from './icons';

export default function FaqSection() {
  // the Figma frames show the last question expanded
  const [openId, setOpenId] = useState<string | null>(FAQS[FAQS.length - 1].id);
  const { openRequest } = useRequestModal();

  return (
    <Container as="section" className="grid gap-y-8 lg:grid-cols-12 lg:gap-y-[clamp(1.5rem,2vw,2.5rem)]">
      <h2 className="text-h2 font-bold lg:col-span-4">FAQ</h2>

      <ul className="lg:col-span-8 lg:col-start-5 lg:row-span-2 lg:row-start-1">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          const panelId = `faq-panel-${faq.id}`;
          return (
            <li key={faq.id} className="border-b border-ink/70">
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="group flex w-full items-start justify-between gap-6 py-4 transition-opacity hover:opacity-70 text-left text-item-title font-bold md:py-[clamp(0.875rem,1.1vw,1.5rem)]"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <Minus className="mt-0.5 h-5 w-5 shrink-0 md:h-[clamp(1.25rem,1.6vw,2rem)] md:w-[clamp(1.25rem,1.6vw,2rem)]" />
                  ) : (
                    <Plus className="mt-0.5 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:rotate-90 md:h-[clamp(1.25rem,1.6vw,2rem)] md:w-[clamp(1.25rem,1.6vw,2rem)]" />
                  )}
                </button>
              </h3>
              {isOpen && (
                <p id={panelId} className="max-w-[75%] pb-5 text-body text-muted md:pb-[clamp(1rem,1.4vw,2rem)]">
                  {faq.answer}
                </p>
              )}
            </li>
          );
        })}
      </ul>

      <div className="lg:col-span-4 lg:row-start-2 lg:self-start">
        <Button variant="responsiveDark" arrow block onClick={() => openRequest('Question')}>
          Ask a Question
        </Button>
      </div>
    </Container>
  );
}
