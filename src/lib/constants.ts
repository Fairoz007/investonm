import { NavItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [

  {
    label: 'ABOUT US',
    href: '/who-we-are',
    children: [
      { label: 'Our Story', href: '/learn-our-story' },
      { label: 'Mission & Vision', href: '/who-we-are' },
      { label: 'Our Experts', href: '/our-experts' }
    ]
  },
  {
    label: 'DISCOVER OMAN',
    href: '/about-oman',
    children: [
      { 
        label: 'WHY OMAN', 
        href: '/about-oman',
        hasSubmenu: true,
        submenu: {
          columns: [
            {
              title: '',
              items: [
                { label: 'Overview', href: '/about-oman' },
                { label: 'Key Benefits', href: '/key-sectors' }
              ]
            }
          ]
        }
      },
      {
        label: 'SECTORS',
        href: '/key-sectors',
        hasSubmenu: true,
        submenu: {
          columns: [
            {
              title: '',
              items: [
                { label: 'Tourism', href: '/key-sectors' },
                { label: 'Logistics', href: '/key-sectors' },
                { label: 'Energy', href: '/key-sectors' }
              ]
            }
          ]
        }
      },
      {
        label: 'OPPORTUNITIES',
        href: '/about-oman',
        hasSubmenu: true,
        submenu: {
          columns: [
            {
              title: '',
              items: [
                { label: 'Active Projects', href: '/about-oman' },
                { label: 'Investment Zones', href: '/key-sectors' }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    label: 'Start Investing',
    href: '/key-sectors',
    children: [
      { label: 'Energy', href: '/key-sectors' },
      { label: 'Technology', href: '/key-sectors' },
      { label: 'Private Equity', href: '/key-sectors' },
      { label: 'Trade', href: '/key-sectors' },
      { label: 'Investments', href: '/key-sectors' },
      { label: 'Tourism & Hospitality', href: '/key-sectors' },
      { label: 'Education', href: '/key-sectors' },
      { label: 'Logistics', href: '/key-sectors' },
      { label: 'Real Estate', href: '/key-sectors' }
    ]
  },
  {
    label: 'Resources & Tools',
    href: '/resources',
  },
  {
    label: 'nav.connect',
    href: '/contact'
  }
];

export const WHY_INVEST_CARDS = [
  {
    id: 1,
    title: 'Transformational Vision, Young Nation',
    description: "Majority of Oman's Population under 35, digitally native, globally connected",
    stat: '70%',
    icon: 'Users',
    image: '/images/why-invest/young-nation.png'
  },
  {
    id: 2,
    title: 'A Trusted and Stable Destination',
    description: 'Recognized as #1 in FDI Destination in MENA',
    stat: '#1',
    icon: 'ShieldCheck',
    image: '/images/why-invest/trusted-stable.png'
  },
  {
    id: 3,
    title: 'World Class Services and Infrastructure',
    description: 'Global Excellence in Maritime, Education, Healthcare, and Logistics',
    stat: 'Top 10',
    icon: 'Globe2',
    image: '/images/why-invest/world-class.png'
  },
  {
    id: 4,
    title: 'State-of-the-Art Digital Infrastructure',
    description: 'Ranked Globally #2 in Digital Government Maturity Index (DGOI)',
    stat: '#2',
    icon: 'Cpu',
    image: '/images/why-invest/digital-infra.png'
  },
  {
    id: 5,
    title: 'Large Scale Transformational Investments',
    description: 'USD 3T+ in investable opportunities across sectors',
    stat: '$3T+',
    icon: 'TrendingUp',
    image: '/images/why-invest/large-investments.png'
  }
];
