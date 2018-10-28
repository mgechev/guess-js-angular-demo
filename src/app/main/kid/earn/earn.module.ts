import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { EarnComponent } from './earn.component';

@NgModule({
  declarations: [EarnComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EarnComponent
      }
    ])
  ],
  bootstrap: [EarnComponent]
})
export class EarnModule {}
