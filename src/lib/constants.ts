import type { NavItem, Slide, InvestCard } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'HOME',
    href: '/',
  },
  {
    label: 'ABOUT OMAN',
    href: '/about-oman',
    subtitle: 'Why Oman is a Global Investment Destination',
    children: [
      { label: 'Oman’s Infrastructure Advantage', href: '/about-oman#infrastructure' },
      { label: 'Legislation', href: '/about-oman#legislation' },
      { label: 'Business Ecosystem', href: '/about-oman#ecosystem' },
      { label: 'Strategic Location', href: '/about-oman#location' },
      { label: 'A Cost-Effective Business Hub', href: '/about-oman#hub' },
      { label: 'Friendly Business Environment', href: '/about-oman#environment' },
      { label: 'Incentives to Invest', href: '/about-oman#incentives' },
    ],
  },
  {
    label: 'KEY SECTORS',
    href: '/key-sectors',
    subtitle: 'Strategic Investment Sectors in Oman',
    children: [
      { label: 'Energy', href: '/key-sectors#energy' },
      { label: 'Luxury', href: '/key-sectors#luxury' },
      { label: 'Trade', href: '/key-sectors#trade' },
      { label: 'Investments', href: '/key-sectors#investments' },
      { label: 'Tourism & Hospitality', href: '/key-sectors#tourism' },
      { label: 'Education', href: '/key-sectors#education' },
      { label: 'Logistics', href: '/key-sectors#logistics' },
      { label: 'Real Estate', href: '/key-sectors#real-estate' },
    ],
  },
  {
    label: 'WHO WE ARE',
    href: '/who-we-are',
    subtitle: 'Your Strategic Investment Partner',
    children: [
      { label: 'Our Mission', href: '/who-we-are#mission' },
      { label: 'Our Vision', href: '/who-we-are#vision' },
      { label: 'Our Services', href: '/who-we-are#services' },
    ],
  },
  {
    label: 'CONTACT US',
    href: '/contact',
    subtitle: 'Connect with Our Investment Team',
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
    gradient: 'from-teal-600 to-teal-800',
    stat: '70%',
  },
  {
    id: 2,
    title: 'A Trusted and Stable Destination',
    description: 'Recognized as #1 in FDI Destination in MENA',
    gradient: 'from-blue-600 to-blue-800',
    stat: '#1',
  },
  {
    id: 3,
    title: 'World Class Services and Infrastructure',
    description: 'Global Excellence in Maritime, Education, Healthcare, and Logistics',
    gradient: 'from-indigo-600 to-indigo-800',
    stat: 'Top 10',
  },
  {
    id: 4,
    title: 'State-of-the-Art Digital Infrastructure',
    description: 'Ranked Globally #2 in Digital Government Maturity Index (DGOI)',
    gradient: 'from-cyan-600 to-cyan-800',
    stat: '#2',
  },
  {
    id: 5,
    title: 'Large Scale Transformational Investments',
    description: 'USD 3T+ in investable opportunities across sectors',
    gradient: 'from-purple-600 to-purple-800',
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
    interval: 6000,
    transitionDuration: 1.0,
  },
};
