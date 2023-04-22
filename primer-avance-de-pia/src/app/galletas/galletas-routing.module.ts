import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalletasPage } from './galletas.page';

const routes: Routes = [
  {
    path: '',
    component: GalletasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalletasPageRoutingModule {}
