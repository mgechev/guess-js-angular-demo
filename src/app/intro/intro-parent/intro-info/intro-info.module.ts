import { InfoComponent } from './intro-info.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: InfoComponent
      }
    ])
  ],
  bootstrap: [InfoComponent]
})
export class IntroInfoModule {}
