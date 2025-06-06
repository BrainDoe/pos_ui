import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/route').then((m) => m.routes),
  },
  {
    path: 'layout',
    // component: LayoutComponent,
    loadChildren: () => import('./layout/layout.route').then((m) => m.routes),
  },
];
