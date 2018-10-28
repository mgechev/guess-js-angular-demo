import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { VerifyComponent } from './verify.component';

@NgModule({
  declarations: [VerifyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: VerifyComponent
      }
    ])
  ],
  bootstrap: [VerifyComponent]
})
export class VerifyModule {}
