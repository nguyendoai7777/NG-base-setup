import { Route } from '@angular/router';

const baseLayoutRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () => import('@pages/home/home.component'),
  },
];

export default baseLayoutRoutes;
