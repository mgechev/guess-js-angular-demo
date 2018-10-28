import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { RewardsComponent } from './rewards.component';

@NgModule({
  declarations: [RewardsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RewardsComponent,
        children: [
          {
            path: 'games/:id',
            loadChildren: './games/games.module#GamesModule'
          },
          {
            path: 'games',
            loadChildren: './games/games.module#GamesModule'
          },
          {
            path: 'badges/:id',
            loadChildren: './badges/badges.module#BadgesModule'
          },
          {
            path: 'badges',
            loadChildren: './badges/badges.module#BadgesModule'
          }
        ]
      }
    ])
  ],
  bootstrap: [RewardsComponent]
})
export class RewardsModule {}
