import shipping from '../assets/images/service-shipping.webp';
import warranty from '../assets/images/service-warranty.webp';
import financing from '../assets/images/service-financing.webp';
import type { FaqItem, NavItem, ServiceItem } from '../types';

export const COMPANY = {
  name: 'Cars Classic Autotrader',
  headerPhone: '+1 (240) 375-1288',
  phone: '+1 (701) 581-1331',
  address: '161 Trumpeter Ave, Soldotna, Alaska',
  /** what the live map searches for / pins — change to any address or "lat,lng" */
  mapQuery: '161 Trumpeter Ave, Soldotna, Alaska',
  year: 2024,
};

/** Total inventory shown in the "N cars" pill / "N more cars" tile */
export const TOTAL_CARS = 32;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Cars', to: '/cars' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contacts', to: '/contacts' },
];

export const FOOTER_LINKS: NavItem[][] = [
  [
    { label: 'Cars', to: '/cars' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
  ],
  [
    { label: 'How to rent', to: '/services' },
    { label: 'Contacts', to: '/contacts' },
  ],
];

export const STATS = [
  { value: '32', label: 'Retro car' },
  { value: '400', label: 'Satisfied clients' },
  { value: '5', suffix: 'Years', label: 'Delighting our clients' },
];

export const SERVICES: ServiceItem[] = [
  { id: 'shipping', title: '01 / Shipping', image: shipping },
  { id: 'warranty', title: '02 / Warranty purchase', image: warranty },
  { id: 'financing', title: '03 / Financing', image: financing },
];

export const FAQS: FaqItem[] = [
  {
    id: 'financing',
    question: 'Do you offer financing options for purchasing classic cars?',
    answer:
      'Yes, we work with several lenders that specialise in classic and collector vehicles. Send us an application and we will suggest a plan that fits your budget.',
  },
  {
    id: 'restored',
    question: 'Are the showcased cars fully restored or in original condition?',
    answer:
      'Both. Every listing states whether the car is a frame-off restoration, partially restored or untouched original, with photos of the work that was done.',
  },
  {
    id: 'shipping',
    question: 'Do you assist with shipping for purchased classic cars?',
    answer:
      'We arrange enclosed transport across the USA and keep you updated until the car is at your door.',
  },
  {
    id: 'certified',
    question: 'Are your vintage cars certified or inspected for authenticity?',
    answer:
      'Each vehicle goes through a multi-point inspection and its VIN and documentation are verified before it is listed.',
  },
  {
    id: 'photos',
    question: 'Can I request additional photos before purchasing?',
    answer:
      'Yes, we welcome and encourage requests for more detailed photographs or videos of any vehicle in our inventory. Contact our team, and we’ll arrange the necessary details for your peace of mind.',
  },
];

export const ABOUT_TEXT: string[] = [
  '1966 Chevrolet Chevelle SS – STK 2801',
  'The 1966 Chevelle SS396 captivated onlookers with its striking appearance. The revamped Fisher body ushered in a new era for the mid-size Chevy, establishing it as a performance icon. In this iteration, the SS396 evolved into a distinct model within the Chevelle lineup, showcasing numerous styling upgrades and an unwavering focus on performance.',
  'This ‘138’ code Chevelle SS396 underwent an impressive frame-off restoration in 2013, emerging as a visual masterpiece. A professional application of Bolero Red paint revitalized the exterior, complemented by a meticulous restoration of the interior in original red vinyl. Every authentic detail, including the Muncie ‘hypodermic’ shifter, was thoughtfully recreated. The cabin features a complete set of SunPro gauges alongside a column-mounted tachometer, tinted windows, and an aftermarket AM/FM/cassette stereo system.',
  'Under the hood, the original 396ci ‘Rat’ powerplant gave way to a robust 427ci big-block. This powerhouse, meticulously rebuilt, boasts an aluminum intake, dual-line Holley carburetor, and a street-savvy cam. Paired with a 4-speed manual transmission, the throaty exhaust note resonates with power. (Trivia: A few years later, Don Yenko Chevrolet in Pittsburgh adopted a similar drivetrain package for their COPO Chevelles.)',
  'GM Rally wheels with trim rings and centers embrace sturdy 15" BFG Radial T/A tires. Steering is managed manually, while power disc/drum brakes, a front sway bar, and HD shocks contribute to a balanced driving experience.',
];
