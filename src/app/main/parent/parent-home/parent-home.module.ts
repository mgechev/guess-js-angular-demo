import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ParentHomeComponent } from './parent-home.component';

@NgModule({
  declarations: [ParentHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ParentHomeComponent
      }
    ])
  ],
  bootstrap: [ParentHomeComponent]
})
export class ParentHomeModule {}
