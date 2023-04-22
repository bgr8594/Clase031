import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastelChocFresaPage } from './pastel-choc-fresa.page';

const routes: Routes = [
  {
    path: '',
    component: PastelChocFresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastelChocFresaPageRoutingModule {}
