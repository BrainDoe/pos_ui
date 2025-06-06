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
    url: '/layout/dashboard',
  },
  {
    name: 'Products',
    iconUrl: '',
    permissionKey: 'User',
    url: '/layout/products',
  },
  {
    name: 'Categories',
    url: '/layout/categories',
    iconUrl: '',
    permissionKey: 'User',
  },
  {
    name: 'Invoice',
    url: '/layout/invoice',
    iconUrl: '',
    permissionKey: 'User',
  },
  {
    name: 'Sales',
    url: '/layout/sales',
    iconUrl: '',
    permissionKey: 'User',
  },
];
