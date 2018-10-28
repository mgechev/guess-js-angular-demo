import { QuestionComponent } from './question.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [QuestionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuestionComponent
      }
    ])
  ],
  bootstrap: [QuestionComponent]
})
export class QuestionModule {}
