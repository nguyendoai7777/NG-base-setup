import { Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('@layouts/base/base-layout.component'),
    loadChildren: () => import('@layouts/base/base-layout.routes'),
  },
  {
    path: 'ndb',
    loadComponent: () => import('@layouts/ndb/none-dashboard-layout.component'),
    loadChildren: () => import('@layouts/ndb/ndb-layout.routes'),
  },
  {
    path: '404',
    loadComponent: () => import('@layouts/not-found/not-found.component'),
  },
  {
    path: '**',
    redirectTo: '404',
  },
  //
];

export default appRoutes;
