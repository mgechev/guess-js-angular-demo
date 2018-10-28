import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { SettingsComponent } from './settings/settings.component';
import { VerifyComponent } from './verify/verify.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ParentComponent,
        children: [
          {
            path: 'settings',
            loadChildren: './settings/settings.module#SettingsModule'
          },
          {
            path: 'home',
            loadChildren: './parent-home/parent-home.module#ParentHomeModule'
          },
          {
            path: 'faq',
            loadChildren: './faq/faq.module#FaqModule'
          },
          {
            path: 'verify',
            loadChildren: './verify/verify.module#VerifyModule'
          }
        ]
      }
    ])
  ],
  bootstrap: [ParentComponent]
})
export class ParentModule {}
