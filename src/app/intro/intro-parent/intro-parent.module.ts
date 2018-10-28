import { ParentComponent } from './intro-parent.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ParentComponent,
        children: [
          {
            path: 'personalize',
            loadChildren: './intro-personalize/intro-personalize.module#IntroPersonalizeModule'
          },
          {
            path: 'info',
            loadChildren: './intro-info/intro-info.module#IntroInfoModule'
          },
          {
            path: 'reward',
            loadChildren: './intro-reward/intro-reward.module#IntroRewardModule'
          },
          {
            path: 'reward/:id',
            loadChildren: './intro-reward/intro-reward.module#IntroRewardModule'
          }
        ]
      }
    ])
  ],
  bootstrap: [ParentComponent]
})
export class IntroParentModule {}
