import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceptorPage } from './receptor.page';

const routes: Routes = [
  {
    path: '',
    component: ReceptorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceptorPageRoutingModule {}
