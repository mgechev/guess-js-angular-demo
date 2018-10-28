import { FriendsComponent } from './friends.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FriendsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FriendsComponent
      }
    ])
  ],
  bootstrap: [FriendsComponent]
})
export class FriendsModule {}
