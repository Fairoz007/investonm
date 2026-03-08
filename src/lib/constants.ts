import type { NavItem, Slide, InvestCard } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'WHY OMAN',
    href: '#why-oman',
    subtitle: 'Discover the Sultanate\'s limitless potential',
    children: [
      { label: 'Vision and Leadership Message', href: '/why-oman/vision-leadership' },
      { label: 'Why Invest in Oman', href: '/why-oman/why-invest' },
      { label: 'Living in Oman', href: '/why-oman/living' },
      { label: 'Oman Vision 2040', href: '/why-oman/vision-2040' },
      { label: 'National Investment Strategy', href: '/why-oman/nis' },
      { label: 'National Strategies', href: '/why-oman/national-strategies' },
      { label: 'About Oman Investment', href: '/why-oman/about-oman-investment' },
    ],
  },
  {
    label: 'SECTOR & OPPORTUNITIES',
    href: '#sectors',
    subtitle: 'A Unified Hub of Investment Opportunities',
    children: [
      { label: 'Investment Opportunities', href: '/sectors/opportunities' },
      {
        label: 'Sectors',
        href: '/sectors/key-sectors',
        hasSubmenu: true,
        submenu: {
          type: 'multicolumn',
          columns: [
            {
              title: 'Manufacturing & Industrial Sectors',
              items: [
                { label: 'Defense & Space', href: '#' },
                { label: 'Agriculture & Food', href: '#' },
                { label: 'Automotive', href: '#' },
                { label: 'Energy', href: '#' },
                { label: 'Mining & Metals', href: '#' },
                { label: 'Petrochemicals', href: '#' },
                { label: 'Biotechnology & Pharma', href: '#' },
                { label: 'Machinery & Equipment', href: '#' },
              ]
            },
            {
              title: 'Services Sectors',
              items: [
                { label: 'Information & Communication', href: '#' },
                { label: 'Education & Training', href: '#' },
                { label: 'Healthcare & Medical', href: '#' },
                { label: 'Real Estate', href: '#' },
                { label: 'Transport & Logistics', href: '#' },
                { label: 'Tourism', href: '#' },
                { label: 'Media', href: '#' },
                { label: 'Culture', href: '#' },
                { label: 'Entertainment', href: '#' },
              ]
            },
            {
              title: 'Environmental Services',
              items: [
                { label: 'Recycling', href: '#' },
                { label: 'Water', href: '#' },
                { label: 'Environment Services', href: '#' },
              ]
            },
            {
              title: 'Other',
              items: [
                { label: 'Sport', href: '#' },
                { label: 'Cybersecurity', href: '#' },
              ]
            }
          ]
        }
      },
      {
        label: 'Regions',
        href: '/sectors/regions',
        hasSubmenu: true,
        submenu: {
          type: 'twocolumn',
          columns: [
            {
              items: [
                { label: 'Muscat Governorate', href: '#' },
                { label: 'Dhofar Governorate', href: '#' },
                { label: 'Musandam Governorate', href: '#' },
                { label: 'Al Buraimi Governorate', href: '#' },
                { label: 'Al Dakhiliyah Governorate', href: '#' },
                { label: 'Al Batinah North Governorate', href: '#' },
                { label: 'Al Batinah South Governorate', href: '#' },
                { label: 'Ash Sharqiyah South Governorate', href: '#' },
                { label: 'Ash Sharqiyah North Governorate', href: '#' },
              ]
            },
            {
              items: [
                { label: 'Al Dhahirah Governorate', href: '#' },
                { label: 'Al Wusta Governorate', href: '#' },
              ]
            }
          ]
        }
      },
      { label: 'Real Estate', href: '/sectors/real-estate' },
      { label: 'Giga Projects', href: '/sectors/giga-projects' },
      { label: 'Investor Journey Guide', href: '/sectors/journey' },
    ],
  },
  {
    label: 'SETUP & SCALE',
    href: '#setup',
    subtitle: 'Start and grow your business with our comprehensive support',
    children: [
      { label: 'Investor Services', href: '/setup/investor-services' },
      { label: 'E Services', href: '/setup/e-services' },
      { label: 'Investor Service Catalog', href: '/setup/catalog' },
      { label: 'Investor Registration Advisor', href: '/setup/registration' },
      { label: 'Scaling by Investor – Value Added Services', href: '/setup/scaling' },
      { label: 'Investor Process Explorer', href: '/setup/process' },
    ],
  },
  {
    label: 'PROGRAMS & INCENTIVES',
    href: '#programs',
    subtitle: 'Explore specialized programs, incentives, and tailored initiatives',
    children: [
      { label: 'RHQ', href: '/programs/rhq' },
      { label: 'GSCRI', href: '/programs/gscri' },
      { label: 'Ignite', href: '/programs/ignite' },
      { label: 'Shreek', href: '/programs/shareek' },
      { label: 'Catalyze Oman', href: '/programs/catalyze-oman' },
      { label: 'Sustainability & Green', href: '/programs/sustainability' },
      { label: 'Special Economic Zones', href: '/programs/sez' },
      { label: 'Success Stories', href: '/programs/success-stories' },
      { label: 'Incentives', href: '/programs/incentives' },
      { label: 'Startup Oman', href: '/programs/startup-oman' },
    ],
  },
  {
    label: 'KNOWLEDGE',
    href: '#knowledge',
    subtitle: 'Key insights into Oman\'s economic and investment ecosystem.',
    children: [
      { label: 'Economic & Investment Reports', href: '/knowledge/reports' },
      { label: 'Competitiveness Insights', href: '/knowledge/competitiveness' },
      { label: 'Foreign Direct Investment Insights', href: '/knowledge/fdi' },
      { label: 'Investment Growth & Opportunities', href: '/knowledge/growth' },
      { label: 'Investment Council', href: '/knowledge/council' },
      { label: 'Events Calendar', href: '/knowledge/events' },
      { label: 'News', href: '/knowledge/news' },
    ],
  },
  {
    label: 'CONTACT US',
    href: '/contact',
    subtitle: 'Get in touch with our local and international teams for support',
    children: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'International Offices', href: '/contact/international' },
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
