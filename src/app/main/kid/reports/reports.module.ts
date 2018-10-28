import { ReportsComponent } from './reports.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReportsComponent
      }
    ])
  ],
  bootstrap: [ReportsComponent]
})
export class ReportsModule {}
