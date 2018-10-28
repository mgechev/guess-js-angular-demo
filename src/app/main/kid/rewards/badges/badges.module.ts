import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { BadgesComponent } from './badges.component';

@NgModule({
  declarations: [BadgesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BadgesComponent
      }
    ])
  ],
  bootstrap: [BadgesComponent]
})
export class BadgesModule {}
