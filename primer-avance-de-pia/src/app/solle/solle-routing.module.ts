import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SollePage } from './solle.page';

const routes: Routes = [
  {
    path: '',
    component: SollePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SollePageRoutingModule {}
