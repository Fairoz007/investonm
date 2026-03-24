export interface NavSubItem {
 label: string;
 href: string;
}

export interface NavSubColumn {
 title?: string;
 items: NavSubItem[];
}

export interface NavChild {
 label: string;
 href: string;
 hasSubmenu?: boolean;
 submenu?: {
 type: 'multicolumn' | 'twocolumn';
 columns: NavSubColumn[];
 };
}

export interface NavItem {
 label: string;
 href: string;
 children?: NavChild[];
 subtitle?: string;
 hasSubmenu?: boolean;
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
