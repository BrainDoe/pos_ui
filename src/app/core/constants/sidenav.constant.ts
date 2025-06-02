type SideNavigation = {
  name: string;
  url?: string;
  iconUrl: string;
  permissionKey: string;
  children?: SideNavigation[];
};

export const navigationMenu: SideNavigation[] = [
  {
    name: 'Dashboard',
    iconUrl: '',
    permissionKey: 'Admin',
    url: '/product/dashboard',
  },
  {
    name: 'Products',
    iconUrl: '',
    permissionKey: 'User',
    url: '/products/items',
  },
  {
    name: 'Categories',
    url: '/products/categories',
    iconUrl: '',
    permissionKey: 'User',
  },
  {
    name: 'Invoice',
    url: '/products/invoice',
    iconUrl: '',
    permissionKey: 'User',
  },
  {
    name: 'Sales',
    url: '/products/sales',
    iconUrl: '',
    permissionKey: 'User',
  },
];
