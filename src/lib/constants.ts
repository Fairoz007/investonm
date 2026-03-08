import type { NavItem, Slide, InvestCard } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'WHY SAUDI',
    href: '#why-saudi',
    children: [
      { label: 'Why Invest in Saudi Arabia', href: '/why-saudi/why-invest' },
      { label: 'Quality of Life', href: '/why-saudi/quality-of-life' },
      { label: 'National Strategy', href: '/why-saudi/national-strategy' },
      { label: 'About MISA', href: '/why-saudi/about-misa' },
    ],
  },
  {
    label: 'SECTOR & OPPORTUNITIES',
    href: '#sectors',
    children: [
      { label: 'INVESTMENT OPPORTUNITIES', href: '/sectors/opportunities' },
      { label: 'SECTORS', href: '/sectors/key-sectors' },
      { label: 'REGIONS', href: '/sectors/regions' },
      { label: 'REAL ESTATE', href: '/sectors/real-estate' },
      { label: 'GIGA PROJECTS', href: '/sectors/giga-projects' },
      { label: 'INVESTOR JOURNEY GUIDE', href: '/sectors/journey' },
    ],
  },
  {
    label: 'SETUP & SCALE',
    href: '#setup',
    children: [
      { label: 'Investor Services', href: '/setup/investor-services' },
      { label: 'E-Services', href: '/setup/e-services' },
    ],
  },
  {
    label: 'PROGRAMS & INCENTIVES',
    href: '#programs',
    children: [
      { label: 'RHQ', href: '/programs/rhq' },
      { label: 'Startup Saudi', href: '/programs/startup-saudi' },
      { label: 'GSCRI', href: '/programs/gscri' },
      { label: 'Shareek', href: '/programs/shareek' },
      { label: 'Catalyze Saudi', href: '/programs/catalyze-saudi' },
    ],
  },
  {
    label: 'KNOWLEDGE',
    href: '#knowledge',
    children: [
      { label: 'Reports and Insights', href: '/knowledge/reports' },
      { label: 'Events Calendar', href: '/knowledge/events' },
      { label: 'Laws & Regulation', href: '/knowledge/laws' },
      { label: 'The Dashboards Pages', href: '/knowledge/dashboards' },
    ],
  },
  {
    label: 'CONTACT US',
    href: '/contact',
    children: [
      { label: 'CONTACT US', href: '/contact' },
      { label: 'INTERNATIONAL OFFICES', href: '/contact/international' },
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
    description: '70% of Saudi Population under 35, digitally native, globally connected',
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
