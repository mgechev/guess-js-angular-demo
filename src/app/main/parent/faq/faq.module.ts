import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';

@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FaqComponent
      }
    ])
  ],
  bootstrap: [FaqComponent]
})
export class FaqModule {}
