import { formatMiles, formatPrice } from '../utils/format';

describe('formatters', () => {
  it('formats prices with a space separator', () => {
    expect(formatPrice(39000).replace(/\s/g, ' ')).toBe('$39 000');
    expect(formatPrice(66700).replace(/\s/g, ' ')).toBe('$66 700');
  });

  it('formats miles', () => {
    expect(formatMiles(14900)).toBe('14,900 miles');
  });
});
