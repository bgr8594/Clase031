import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginVendedorPage } from './login-vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: LoginVendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginVendedorPageRoutingModule {}
