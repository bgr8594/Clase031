import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadarMascotasPage } from './radar-mascotas.page';

const routes: Routes = [
  {
    path: '',
    component: RadarMascotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadarMascotasPageRoutingModule {}
