import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import RequestModal from '../components/RequestModal';

interface RequestModalContextValue {
  /** Opens the request form. `subject` is shown in the dialog (e.g. the car being rented). */
  openRequest: (subject?: string) => void;
}

const RequestModalContext = createContext<RequestModalContextValue | null>(null);

export function RequestModalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ open: boolean; subject?: string }>({ open: false });

  const openRequest = useCallback((subject?: string) => setState({ open: true, subject }), []);
  const close = useCallback(() => setState((prev) => ({ ...prev, open: false })), []);
  const value = useMemo(() => ({ openRequest }), [openRequest]);

  return (
    <RequestModalContext.Provider value={value}>
      {children}
      {state.open && <RequestModal subject={state.subject} onClose={close} />}
    </RequestModalContext.Provider>
  );
}

export function useRequestModal(): RequestModalContextValue {
  const ctx = useContext(RequestModalContext);
  if (!ctx) throw new Error('useRequestModal must be used inside <RequestModalProvider>');
  return ctx;
}
