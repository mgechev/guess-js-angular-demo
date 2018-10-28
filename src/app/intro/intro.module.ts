import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IntroComponent } from './intro.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [IntroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: IntroComponent,
        children: [
          {
            path: 'login',
            loadChildren: './login/login.module#LoginModule'
          },
          {
            path: 'parent',
            loadChildren: './intro-parent/intro-parent.module#IntroParentModule'
          }
        ]
      }
    ])
  ],
  bootstrap: [IntroComponent]
})
export class IntroModule {}
