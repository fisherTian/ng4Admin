import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { EditComponent } from './edit.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '活动管理'
    },
    children: [
      {
        path: 'list',
        component: ListComponent,
        data: {
          title: '发起的活动'
        }
      },
      {
        path: 'edit',
        component: EditComponent,
        data: {
          title: '发起活动'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule {}
