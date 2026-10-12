import type { ReactNode } from 'react';
import { cx } from '../utils/format';

interface PillProps {
  children: ReactNode;
  /** "onImage": dark outline on mobile, white outline on top of photos (tablet+) */
  tone?: 'default' | 'onImage' | 'inverse';
  className?: string;
}

const TONES = {
  default: 'border-ink text-ink',
  inverse: 'border-white/90 text-white',
  onImage: 'border-ink/70 text-ink md:border-white/90 md:text-white',
};

/** Non-interactive rounded label ("14,900 miles", "32 cars", "$66 700") */
export default function Pill({ children, tone = 'default', className }: PillProps) {
  return (
    <span
      className={cx(
        'inline-flex h-10 items-center rounded-full border px-5 text-btn font-medium md:h-[clamp(2.25rem,2.4vw,3rem)]',
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
