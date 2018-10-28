import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { KidComponent } from './kid.component';
import { QuestionComponent } from './question/question.component';
import { FriendsComponent } from './friends/friends.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [KidComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: KidComponent,
        children: [
          {
            path: 'question/:standard/:question/:id',
            loadChildren: './question/question.module#QuestionModule'
          },
          {
            path: 'question/:standard/:question',
            loadChildren: './question/question.module#QuestionModule'
          },
          {
            path: 'friends',
            loadChildren: './friends/friends.module#FriendsModule'
          },
          {
            path: 'reports',
            loadChildren: './reports/reports.module#ReportsModule'
          },
          {
            loadChildren: './home/home.module#HomeModule',
            path: 'home'
          },
          {
            loadChildren: './earn/earn.module#EarnModule',
            path: 'earn'
          },
          {
            loadChildren: './rewards/rewards.module#RewardsModule',
            path: 'rewards'
          }
        ]
      }
    ])
  ],
  bootstrap: [KidComponent]
})
export class KidModule {}
