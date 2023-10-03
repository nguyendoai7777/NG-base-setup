import { Routes } from '@angular/router';

const ndbRoutes: Routes = [
  {
    path: 'intro',
    loadComponent: () => import('@pages/intro/intro.component'),
  },
];

export default ndbRoutes;
