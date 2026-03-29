export type SearchResultCategory =
  | 'Page'
  | 'Sector'
  | 'Service'
  | 'Resource'
  | 'Leadership'
  | 'About';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: SearchResultCategory;
  path: string;          // relative to /:lang/
  tags: string[];
  icon?: string;
}

export const SEARCH_DATA: SearchResult[] = [
  // ─── Pages ────────────────────────────────────────────────────────────────
  {
    id: 'home',
    title: 'Home',
    description: 'Discover Shomoukh International Investment — Oman\'s premier private investment house.',
    category: 'Page',
    path: '',
    tags: ['home', 'landing', 'invest in oman', 'shomoukh'],
  },
  {
    id: 'who-we-are',
    title: 'Who We Are',
    description: 'Architects of economic legacy. A premier private investment house established in 2006 by the Al Hashmi family.',
    category: 'Page',
    path: 'who-we-are',
    tags: ['about', 'history', 'foundation', 'al hashmi', 'mission', 'vision', '2006'],
  },
  {
    id: 'about-oman',
    title: 'About Oman',
    description: 'A strategic global gateway offering a stable and attractive environment for long-term investment.',
    category: 'About',
    path: 'about-oman',
    tags: ['oman', 'sultanate', 'gateway', 'stable economy', 'muscat', 'vision 2040', 'free zones'],
  },
  {
    id: 'key-sectors',
    title: 'Key Sectors',
    description: "Explore industries critical to Oman's national development and global competitiveness.",
    category: 'Page',
    path: 'key-sectors',
    tags: ['sectors', 'industries', 'investment areas', 'portfolio'],
  },
  {
    id: 'our-experts',
    title: 'Our Experts',
    description: 'Guided by a legacy of leadership and strategic foresight — meet our expert leadership team.',
    category: 'Leadership',
    path: 'our-experts',
    tags: ['experts', 'leadership', 'team', 'management', 'directors'],
  },
  {
    id: 'resources',
    title: 'Investor Resources',
    description: 'Access key documents, reports, and insights into Oman\'s investment landscape.',
    category: 'Resource',
    path: 'resources',
    tags: ['resources', 'reports', 'documents', 'investor intelligence', 'market reports'],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    description: 'Connect with Shomoukh — global reach, local impact. Get in touch for partnerships and inquiries.',
    category: 'Page',
    path: 'contact',
    tags: ['contact', 'inquiry', 'partnership', 'muscat', 'email', 'phone'],
  },
  {
    id: 'signin',
    title: 'Investor Portal Login',
    description: 'Sign in to access your personalized dashboard and portfolio reports.',
    category: 'Page',
    path: 'signin',
    tags: ['sign in', 'login', 'portal', 'dashboard', 'investor login'],
  },

  // ─── Sectors ──────────────────────────────────────────────────────────────
  {
    id: 'sector-tourism',
    title: 'Tourism & Leisure',
    description: 'Developing iconic destinations and world-class hospitality across the Sultanate of Oman.',
    category: 'Sector',
    path: 'key-sectors',
    tags: ['tourism', 'leisure', 'hospitality', 'hotels', 'destinations', 'heritage'],
  },
  {
    id: 'sector-logistics',
    title: 'Logistics & Supply Chain',
    description: 'Strengthening Oman\'s position as a global logistical hub connecting East and West.',
    category: 'Sector',
    path: 'key-sectors',
    tags: ['logistics', 'supply chain', 'ports', 'trade', 'shipping', 'hub'],
  },
  {
    id: 'sector-energy',
    title: 'Energy & Sustainability',
    description: 'Investing in renewable energy and sustainable development for a greener future.',
    category: 'Sector',
    path: 'key-sectors',
    tags: ['energy', 'renewable', 'sustainability', 'green', 'solar', 'wind', 'oil gas'],
  },
  {
    id: 'sector-healthcare',
    title: 'Healthcare',
    description: 'Building world-class healthcare infrastructure and services across Oman.',
    category: 'Sector',
    path: 'key-sectors',
    tags: ['healthcare', 'medical', 'hospitals', 'health', 'pharma'],
  },
  {
    id: 'sector-ict',
    title: 'ICT & Technology',
    description: 'Driving digital transformation and technology investment across the Sultanate.',
    category: 'Sector',
    path: 'key-sectors',
    tags: ['ict', 'technology', 'digital', 'innovation', 'tech', 'fintech', 'software'],
  },
  {
    id: 'sector-manufacturing',
    title: 'Manufacturing',
    description: 'Developing industrial and manufacturing capabilities to diversify Oman\'s economy.',
    category: 'Sector',
    path: 'key-sectors',
    tags: ['manufacturing', 'industrial', 'factory', 'production'],
  },
  {
    id: 'sector-mining',
    title: 'Mining & Natural Resources',
    description: 'Unlocking Oman\'s mineral wealth through responsible and sustainable mining practices.',
    category: 'Sector',
    path: 'key-sectors',
    tags: ['mining', 'minerals', 'natural resources', 'extraction', 'copper', 'chromite'],
  },
  {
    id: 'sector-agriculture',
    title: 'Agriculture & Fisheries',
    description: 'Investing in Oman\'s agricultural sector and rich marine resources for food security.',
    category: 'Sector',
    path: 'key-sectors',
    tags: ['agriculture', 'fisheries', 'farming', 'food', 'marine', 'aquaculture'],
  },
  {
    id: 'sector-education',
    title: 'Education',
    description: 'Developing world-class educational institutions to build Oman\'s human capital.',
    category: 'Sector',
    path: 'key-sectors',
    tags: ['education', 'schools', 'university', 'training', 'human capital'],
  },
  {
    id: 'sector-real-estate',
    title: 'Real Estate',
    description: 'Developing premium real estate and infrastructure projects across Oman.',
    category: 'Sector',
    path: 'key-sectors',
    tags: ['real estate', 'property', 'construction', 'infrastructure', 'development'],
  },

  // ─── Why Oman / Services ───────────────────────────────────────────────────
  {
    id: 'why-oman-quality-life',
    title: 'Quality of Life in Oman',
    description: 'Safe, modern lifestyle with natural beauty, world-class amenities and a high quality of life.',
    category: 'About',
    path: 'why-oman/quality-of-life',
    tags: ['quality of life', 'living', 'lifestyle', 'safe', 'expat', 'family'],
  },
  {
    id: 'why-oman-national-strategy',
    title: 'National Strategy — Vision 2040',
    description: 'Oman Vision 2040: a forward-looking national agenda for economic diversification and innovation.',
    category: 'About',
    path: 'why-oman/national-strategy',
    tags: ['vision 2040', 'national strategy', 'economic diversification', 'reform', 'oman plan'],
  },
  {
    id: 'giga-projects',
    title: 'Giga Projects',
    description: 'Explore Oman\'s landmark mega-projects shaping the future of the Sultanate.',
    category: 'Page',
    path: 'sectors/giga-projects',
    tags: ['giga projects', 'mega projects', 'neom', 'duqm', 'special economic zone'],
  },
  {
    id: 'regions',
    title: 'Investment Regions',
    description: 'Discover Oman\'s key investment regions and free zones attracting global capital.',
    category: 'About',
    path: 'sectors/regions',
    tags: ['regions', 'governorates', 'muscat', 'salalah', 'duqm', 'sohar', 'free zones'],
  },

  // ─── Resources ────────────────────────────────────────────────────────────
  {
    id: 'dashboards',
    title: 'Investment Dashboards',
    description: 'Interactive dashboards providing real-time investment data and portfolio insights.',
    category: 'Resource',
    path: 'dashboards',
    tags: ['dashboard', 'analytics', 'data', 'portfolio', 'insights', 'kpi'],
  },
  {
    id: 'reports',
    title: 'Market Reports',
    description: 'In-depth market reports and investor intelligence on Oman\'s growing economy.',
    category: 'Resource',
    path: 'reports',
    tags: ['reports', 'market', 'analysis', 'research', 'intelligence', 'economics'],
  },
  {
    id: 'events',
    title: 'Events & Conferences',
    description: 'Stay up-to-date with Shomoukh\'s upcoming events, forums, and investment conferences.',
    category: 'Resource',
    path: 'events',
    tags: ['events', 'conferences', 'forums', 'networking', 'calendar'],
  },
  {
    id: 'laws',
    title: 'Laws & Regulations',
    description: 'Navigate Oman\'s investment laws, regulations, and legal framework for foreign investors.',
    category: 'Resource',
    path: 'laws',
    tags: ['laws', 'regulations', 'legal', 'foreign investment law', 'compliance', 'tax'],
  },

  // ─── Leadership ────────────────────────────────────────────────────────────
  {
    id: 'chairman',
    title: 'Sheikh Salim Al Hashmi — Chairman',
    description: 'Chairman of Shomoukh International Investment, guiding the firm\'s legacy and strategic vision.',
    category: 'Leadership',
    path: 'our-experts',
    tags: ['chairman', 'sheikh salim', 'al hashmi', 'leadership', 'founder'],
  },
  {
    id: 'ceo',
    title: 'Sheikha Janat Al Hashmi — CEO',
    description: 'Co-Founder & CEO overseeing strategic investment clusters across 10+ sectors.',
    category: 'Leadership',
    path: 'our-experts',
    tags: ['ceo', 'chief executive', 'sheikha janat', 'al hashmi', 'leadership'],
  },
  {
    id: 'vp',
    title: 'Sheikh Julanda Al Hashmi — Vice President',
    description: 'Co-Founder & VP focused on foreign direct investment and international market partnerships.',
    category: 'Leadership',
    path: 'our-experts',
    tags: ['vice president', 'vp', 'sheikh julanda', 'al hashmi', 'fdi', 'leadership'],
  },
  {
    id: 'md',
    title: 'Sheikha Jinan Al Hashmi — Managing Director',
    description: 'Co-Founder & Managing Director championing sustainable development and Vision 2040.',
    category: 'Leadership',
    path: 'our-experts',
    tags: ['managing director', 'md', 'sheikha jinan', 'al hashmi', 'sustainability', 'leadership'],
  },
];

// Category color / accent mapping
export const CATEGORY_STYLES: Record<SearchResultCategory, { color: string; bg: string }> = {
  Page:       { color: 'text-blue-400',   bg: 'bg-blue-500/10' },
  Sector:     { color: 'text-violet-400', bg: 'bg-violet-500/10' },
  Service:    { color: 'text-cyan-400',   bg: 'bg-cyan-500/10' },
  Resource:   { color: 'text-amber-400',  bg: 'bg-amber-500/10' },
  Leadership: { color: 'text-pink-400',   bg: 'bg-pink-500/10' },
  About:      { color: 'text-emerald-400',bg: 'bg-emerald-500/10' },
};
