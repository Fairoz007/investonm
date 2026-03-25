import type { NavItem, Slide, InvestCard } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/who-we-are',
    children: [
      { label: 'Our Story', href: '/who-we-are#story' },
      { label: 'Mission & Vision', href: '/who-we-are#mission' },
      { label: 'Our Experts', href: '/our-experts' },
    ],
  },
  {
    label: 'Discover Oman',
    href: '/about-oman',
    children: [
      { label: 'Infrastructure', href: '/about-oman#infrastructure' },
      { label: 'Legislation', href: '/about-oman#legislation' },
      { label: 'Business Ecosystem', href: '/about-oman#ecosystem' },
      { label: 'Strategic Location', href: '/about-oman#location' },
    ],
  },
  {
    label: 'Investing',
    href: '/key-sectors',
    children: [
      { label: 'Energy', href: '/key-sectors#energy' },
      { label: 'Technology', href: '/key-sectors#technology' },
      { label: 'Private Equity', href: '/key-sectors#private-equity' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Investor Guide', href: '/resources#guide' },
      { label: 'Reports', href: '/resources#reports' },
    ],
  },
];

export const HERO_SLIDES: Slide[] = [
 {
 id: 1,
 image: '/images/hero-scientist.jpg',
 alt: 'Scientist in advanced laboratory',
 },
 {
 id: 2,
 image: '/images/hero-engineers.jpg',
 alt: 'Engineers reviewing plans',
 },
 {
 id: 3,
 image: '/images/hero-energy.jpg',
 alt: 'Sustainable energy infrastructure',
 },
 {
 id: 4,
 image: '/images/hero-manufacturing.jpg',
 alt: 'Advanced manufacturing facility',
 },
];

export const WHY_INVEST_CARDS: InvestCard[] = [
 {
 id: 1,
 title: 'Transformational Vision, Young Nation',
 description: 'Majority of Oman\'s Population under 35, digitally native, globally connected',
 gradient: ' ',
 stat: '70%',
 },
 {
 id: 2,
 title: 'A Trusted and Stable Destination',
 description: 'Recognized as #1 in FDI Destination in MENA',
 gradient: ' ',
 stat: '#1',
 },
 {
 id: 3,
 title: 'World Class Services and Infrastructure',
 description: 'Global Excellence in Maritime, Education, Healthcare, and Logistics',
 gradient: ' ',
 stat: 'Top 10',
 },
 {
 id: 4,
 title: 'State-of-the-Art Digital Infrastructure',
 description: 'Ranked Globally #2 in Digital Government Maturity Index (DGOI)',
 gradient: ' ',
 stat: '#2',
 },
 {
 id: 5,
 title: 'Large Scale Transformational Investments',
 description: 'USD 3T+ in investable opportunities across sectors',
 gradient: ' ',
 stat: '$3T+',
 },
];

export const ANIMATION = {
 duration: {
 fast: 0.2,
 normal: 0.3,
 slow: 0.6,
 slider: 1.0,
 },
 easing: {
 default: [0.4, 0, 0.2, 1],
 entrance: [0.16, 1, 0.3, 1],
 exit: [0.4, 0, 1, 1],
 },
 slider: {
    interval: 8000,
    transitionDuration: 1.5,
  },
};
