import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecompensasPage } from './recompensas.page';

const routes: Routes = [
  {
    path: '',
    component: RecompensasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecompensasPageRoutingModule {}
