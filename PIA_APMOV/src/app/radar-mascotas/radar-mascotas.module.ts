import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadarMascotasPageRoutingModule } from './radar-mascotas-routing.module';

import { RadarMascotasPage } from './radar-mascotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadarMascotasPageRoutingModule
  ],
  declarations: [RadarMascotasPage]
})
export class RadarMascotasPageModule {}
