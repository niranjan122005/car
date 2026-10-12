/** 39000 -> "$39 000" (non-breaking space as thousands separator, like the design) */
export const formatPrice = (value: number): string =>
  `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0')}`;

/** 14900 -> "14,900 miles" */
export const formatMiles = (value: number): string => `${value.toLocaleString('en-US')} miles`;

/** Joins truthy class names */
export const cx = (...classes: Array<string | false | null | undefined>): string =>
  classes.filter(Boolean).join(' ');
