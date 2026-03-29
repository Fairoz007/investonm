export interface NavSubmenuItem {
  label: string;
  href: string;
}

export interface NavSubmenuColumn {
  title?: string;
  items: NavSubmenuItem[];
}

export interface NavSubmenu {
  columns: NavSubmenuColumn[];
}

export interface NavChildItem {
  label: string;
  href: string;
  hasSubmenu?: boolean;
  submenu?: NavSubmenu;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChildItem[];
}
