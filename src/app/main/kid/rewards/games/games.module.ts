import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GamesComponent
      }
    ])
  ],
  bootstrap: [GamesComponent]
})
export class GamesModule {}
