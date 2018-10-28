import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { KidComponent } from './kid/kid.component';
import { ParentComponent } from './parent/parent.component';
import { EarnComponent } from './kid/earn/earn.component';
import { HomeComponent } from './kid/home/home.component';
import { RewardsComponent } from './kid/rewards/rewards.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: 'kid',
            loadChildren: './kid/kid.module#KidModule'
          },
          {
            path: 'parent',
            loadChildren: './parent/parent.module#ParentModule'
          }
        ]
      }
    ])
  ],
  bootstrap: [MainComponent]
})
export class MainModule {}
