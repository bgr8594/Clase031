import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapAvisoPage } from './map-aviso.page';

const routes: Routes = [
  {
    path: '',
    component: MapAvisoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapAvisoPageRoutingModule {}
