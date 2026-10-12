import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'square',
  'aria-hidden': true,
  focusable: false,
};

export const ArrowUpRight = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M6 18 18 6M8 6h10v10" />
  </svg>
);

export const Plus = (props: IconProps) => (
  <svg {...base} strokeWidth={1.25} {...props}>
    <path d="M12 2v20M2 12h20" />
  </svg>
);

export const Minus = (props: IconProps) => (
  <svg {...base} strokeWidth={1.25} {...props}>
    <path d="M2 12h20" />
  </svg>
);

export const MenuIcon = (props: IconProps) => (
  <svg {...base} strokeWidth={2} {...props}>
    <path d="M3 6h18M7 12h14M3 18h18" />
  </svg>
);

export const CloseIcon = (props: IconProps) => (
  <svg {...base} strokeWidth={2} {...props}>
    <path d="M5 5l14 14M19 5 5 19" />
  </svg>
);
