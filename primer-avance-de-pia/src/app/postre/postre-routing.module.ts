import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostrePage } from './postre.page';

const routes: Routes = [
  {
    path: '',
    component: PostrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostrePageRoutingModule {}
