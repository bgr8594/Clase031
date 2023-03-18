import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValoracionPage } from './valoracion.page';

const routes: Routes = [
  {
    path: '',
    component: ValoracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValoracionPageRoutingModule {}
