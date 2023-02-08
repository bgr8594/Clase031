import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaPrincipalPageRoutingModule } from './pagina-principal-routing.module';

import { PaginaPrincipalPage } from './pagina-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaPrincipalPageRoutingModule
  ],
  declarations: [PaginaPrincipalPage]
})
export class PaginaPrincipalPageModule {}
