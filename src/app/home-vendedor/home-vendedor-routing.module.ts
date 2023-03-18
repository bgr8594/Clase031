import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeVendedorPage } from './home-vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: HomeVendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeVendedorPageRoutingModule {}
