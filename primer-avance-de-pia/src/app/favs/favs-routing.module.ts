import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavsPage } from './favs.page';

const routes: Routes = [
  {
    path: '',
    component: FavsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavsPageRoutingModule {}
