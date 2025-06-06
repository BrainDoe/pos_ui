import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const routes: Routes = [
  {
    path: '',
    // redirectTo: 'products',
    // pathMatch: 'full',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('../product/product.route').then((m) => m.routes),
      },
      {
        path: 'invoice',
        loadChildren: () =>
          import('../invoice/invoice.route').then((m) => m.routes),
      },
    ],
  },
  {
    path: 'products',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('../product/product.route').then((m) => m.routes),
      },
      {
        path: 'invoice',
        loadChildren: () =>
          import('../invoice/invoice.route').then((m) => m.routes),
      },
    ],
  },
];
