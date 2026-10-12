import type { ElementType, ReactNode } from 'react';
import { cx } from '../utils/format';

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

/** Page gutter that scales from 16px (mobile) to 60px (1920px desktop) */
export default function Container({ children, as: Tag = 'div', className }: ContainerProps) {
  return <Tag className={cx('mx-auto w-full max-w-[120rem] px-gutter', className)}>{children}</Tag>;
}
