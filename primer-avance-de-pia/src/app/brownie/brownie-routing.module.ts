import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowniePage } from './brownie.page';

const routes: Routes = [
  {
    path: '',
    component: BrowniePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowniePageRoutingModule {}
