export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Slide {
  id: number;
  image: string;
  alt: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface InvestCard {
  id: number;
  title: string;
  description: string;
  gradient: string;
  stat?: string;
}

export interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
  benefits: string[];
}
