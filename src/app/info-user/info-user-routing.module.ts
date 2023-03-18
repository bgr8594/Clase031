import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoUserPage } from './info-user.page';

const routes: Routes = [
  {
    path: '',
    component: InfoUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoUserPageRoutingModule {}
