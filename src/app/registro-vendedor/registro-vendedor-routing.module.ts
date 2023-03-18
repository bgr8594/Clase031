import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroVendedorPage } from './registro-vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroVendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroVendedorPageRoutingModule {}
