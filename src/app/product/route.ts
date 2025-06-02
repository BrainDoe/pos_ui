import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'prod',
    pathMatch: 'full',
  },
  {
    path: 'prod',
    component: ProductsComponent,
  },
];
