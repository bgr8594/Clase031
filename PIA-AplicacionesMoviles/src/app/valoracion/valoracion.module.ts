import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValoracionPageRoutingModule } from './valoracion-routing.module';

import { ValoracionPage } from './valoracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValoracionPageRoutingModule
  ],
  declarations: [ValoracionPage]
})
export class ValoracionPageModule {}
