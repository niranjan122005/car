import { useEffect, useId, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import Button from './Button';
import { CloseIcon } from './icons';

interface RequestModalProps {
  subject?: string;
  onClose: () => void;
}

interface Errors {
  name?: string;
  phone?: string;
}

export const validate = (name: string, phone: string): Errors => {
  const errors: Errors = {};
  if (!name.trim()) errors.name = 'Please enter your name';
  if (phone.replace(/\D/g, '').length < 7) errors.phone = 'Please enter a valid phone number';
  return errors;
};

const inputClass =
  'w-full rounded-full border border-ink bg-transparent px-5 py-3 text-body placeholder:text-muted';

export default function RequestModal({ subject, onClose }: RequestModalProps) {
  const titleId = useId();
  const nameRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    nameRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const found = validate(name, phone);
    setErrors(found);
    if (Object.keys(found).length === 0) setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/60 p-0 sm:items-center sm:p-6" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative max-h-full w-full overflow-y-auto rounded-t-2xl bg-paper p-6 sm:max-w-lg sm:rounded-2xl sm:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close dialog"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        {sent ? (
          <div className="space-y-6 py-4">
            <h2 id={titleId} className="text-card-title font-bold">
              Thank you, {name.trim()}!
            </h2>
            <p className="text-body">We received your request and will call you back shortly.</p>
            <Button onClick={onClose} block>
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="space-y-4">
            <h2 id={titleId} className="pr-10 text-card-title font-bold">
              Submit your application
            </h2>
            {subject && <p className="text-body text-muted">{subject}</p>}

            <div>
              <label htmlFor="req-name" className="sr-only">
                Name
              </label>
              <input
                id="req-name"
                ref={nameRef}
                className={inputClass}
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'req-name-error' : undefined}
              />
              {errors.name && (
                <p id="req-name-error" role="alert" className="mt-1 px-5 text-small text-red-700">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="req-phone" className="sr-only">
                Phone
              </label>
              <input
                id="req-phone"
                type="tel"
                className={inputClass}
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'req-phone-error' : undefined}
              />
              {errors.phone && (
                <p id="req-phone-error" role="alert" className="mt-1 px-5 text-small text-red-700">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="req-message" className="sr-only">
                Message
              </label>
              <textarea
                id="req-message"
                rows={3}
                className="w-full rounded-3xl border border-ink bg-transparent px-5 py-3 text-body placeholder:text-muted"
                placeholder="Message (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <Button type="submit" block>
              Send
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
