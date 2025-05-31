import { Routes } from '@angular/router';
import { TestsComponent } from './components/tests/tests.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'prod',
    pathMatch: 'full',
  },
  {
    path: 'prod',
    component: TestsComponent,
  },
];
