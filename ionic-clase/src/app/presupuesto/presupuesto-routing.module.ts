import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresupuestoPage } from './presupuesto.page';

const routes: Routes = [
  {
    path: '',
    component: PresupuestoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresupuestoPageRoutingModule {}
