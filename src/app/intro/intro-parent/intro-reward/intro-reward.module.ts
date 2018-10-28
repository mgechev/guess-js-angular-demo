import { RewardComponent } from './intro-reward.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RewardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RewardComponent
      }
    ])
  ],
  bootstrap: [RewardComponent]
})
export class IntroRewardModule {}
