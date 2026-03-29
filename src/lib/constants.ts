import { NavItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [

  {
    label: 'nav.aboutUs',
    href: '/who-we-are',
    children: [
      { label: 'nav.ourStory', href: '/learn-our-story' },
      { label: 'nav.whoWeAre', href: '/who-we-are' },
      { label: 'nav.ourExperts', href: '/our-experts' }
    ]
  },
  {
    label: 'nav.whyOman',
    href: '/about-oman',
    children: [
      { 
        label: 'nav.whyOman', 
        href: '/about-oman',
        hasSubmenu: true,
        submenu: {
          columns: [
            {
              title: '',
              items: [
                { label: 'nav.overview', href: '/about-oman' },
                { label: 'nav.keyBenefits', href: '/key-sectors' }
              ]
            }
          ]
        }
      },
      {
        label: 'nav.sectors',
        href: '/key-sectors',
        hasSubmenu: true,
        submenu: {
          columns: [
            {
              title: '',
              items: [
                { label: 'nav.tourism', href: '/key-sectors' },
                { label: 'nav.logistics', href: '/key-sectors' },
                { label: 'nav.energy', href: '/key-sectors' }
              ]
            }
          ]
        }
      },
      {
        label: 'nav.opportunities',
        href: '/about-oman',
        hasSubmenu: true,
        submenu: {
          columns: [
            {
              title: '',
              items: [
                { label: 'nav.activeProjects', href: '/about-oman' },
                { label: 'nav.investmentZones', href: '/key-sectors' }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    label: 'hero.cta.startInvesting',
    href: '/key-sectors',
    children: [
      { label: 'services.energy.title', href: '/key-sectors' },
      { label: 'services.items.ict', href: '/key-sectors' },
      { label: 'services.items.manufacturing', href: '/key-sectors' },
      { label: 'services.items.agriculture', href: '/key-sectors' },
      { label: 'services.tourism.title', href: '/key-sectors' },
      { label: 'services.items.education', href: '/key-sectors' },
      { label: 'services.logistics.title', href: '/key-sectors' }
    ]
  },
  {
    label: 'nav.resources',
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
    title: 'trust.pillars.connectivity.title',
    description: "trust.pillars.connectivity.desc",
    stat: '70%',
    icon: 'Users',
    image: '/images/why-invest/young-nation.png'
  },
  {
    id: 2,
    title: 'trust.pillars.economy.title',
    description: 'trust.pillars.economy.desc',
    stat: '#1',
    icon: 'ShieldCheck',
    image: '/images/why-invest/trusted-stable.png'
  },
  {
    id: 3,
    title: 'trust.pillars.business.title',
    description: 'trust.pillars.business.desc',
    stat: 'Top 10',
    icon: 'Globe2',
    image: '/images/why-invest/world-class.png'
  },
  {
    id: 4,
    title: 'trust.pillars.lifestyle.title',
    description: 'trust.pillars.lifestyle.desc',
    stat: '#2',
    icon: 'Cpu',
    image: '/images/why-invest/digital-infra.png'
  }
];
