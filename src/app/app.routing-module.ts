import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'intro'
  },
  {
    loadChildren: './intro/intro.module#IntroModule',
    path: 'intro'
  },
  {
    loadChildren: './main/main.module#MainModule',
    path: 'main'
  }
];
