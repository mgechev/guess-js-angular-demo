import { PersonalizeComponent } from './intro-personalize.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PersonalizeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PersonalizeComponent
      }
    ])
  ],
  bootstrap: [PersonalizeComponent]
})
export class IntroPersonalizeModule {}
