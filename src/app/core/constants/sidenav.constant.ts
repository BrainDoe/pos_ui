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
    name: 'Cart',
    url: '/products/cart',
    iconUrl: '',
    permissionKey: 'User',
  },
  // {
  //   name: 'Customers',
  //   url: '/products/customers',
  //   iconUrl: '',
  //   permissionKey: 'User',
  // },
];
