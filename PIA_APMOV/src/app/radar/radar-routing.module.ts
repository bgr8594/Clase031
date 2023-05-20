import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadarPage } from './radar.page';

const routes: Routes = [
  {
    path: '',
    component: RadarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadarPageRoutingModule {}
