import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginVendedorPageRoutingModule } from './login-vendedor-routing.module';

import { LoginVendedorPage } from './login-vendedor.page';
import { RegistroVendedorPageRoutingModule } from '../registro-vendedor/registro-vendedor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginVendedorPageRoutingModule,
    RegistroVendedorPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginVendedorPage]
})
export class LoginVendedorPageModule {}
