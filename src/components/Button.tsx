import type { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cx } from '../utils/format';
import { ArrowUpRight } from './icons';

export type ButtonVariant = 'dark' | 'outline' | 'white' | 'rent' | 'responsiveDark';

const BASE =
  'group inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border px-6 text-btn font-semibold transition duration-200 active:scale-[0.97] md:h-[clamp(2.5rem,2.4vw,3rem)]';

const VARIANTS: Record<ButtonVariant, string> = {
  dark: 'border-ink bg-ink text-paper hover:bg-ink/85',
  outline: 'border-ink bg-transparent text-ink hover:bg-ink hover:text-paper',
  white: 'border-white bg-white text-ink hover:bg-paper',
  // dark + full width pill on mobile, outlined on tablet/desktop (matches the Figma mobile + desktop frames)
  responsiveDark:
    'border-ink bg-ink text-paper hover:bg-ink/85 md:bg-transparent md:text-ink md:hover:bg-ink md:hover:text-paper',
  // used on car cards: dark on mobile (below the photo), white on top of the photo from tablet up
  rent: 'border-ink bg-ink text-paper hover:bg-ink/85 md:border-white md:bg-white md:text-ink md:hover:bg-paper',
};

interface BaseProps {
  variant?: ButtonVariant;
  arrow?: boolean;
  /** full width on mobile, auto width from tablet up */
  block?: boolean;
  className?: string;
  children: ReactNode;
}

interface LinkButtonProps extends BaseProps {
  to: string;
  onClick?: undefined;
  type?: undefined;
  disabled?: undefined;
}

interface ActionButtonProps extends BaseProps {
  to?: undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export type ButtonProps = LinkButtonProps | ActionButtonProps;

export default function Button(props: ButtonProps) {
  const { variant = 'dark', arrow = false, block = false, className, children } = props;
  const classes = cx(BASE, VARIANTS[variant], block && 'w-full min-[520px]:w-auto', className);
  const content = (
    <>
      {children}
      {arrow && <ArrowUpRight className="h-[1.1em] w-[1.1em] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
    </>
  );

  if (props.to !== undefined) {
    return (
      <Link to={props.to} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={cx(classes, props.disabled && 'cursor-not-allowed opacity-60')}
    >
      {content}
    </button>
  );
}
