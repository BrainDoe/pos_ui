import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/route').then((m) => m.routes),
  },
  {
    path: 'products',
    component: LayoutComponent,
    loadChildren: () => import('./product/route').then((m) => m.routes),
  },
];
