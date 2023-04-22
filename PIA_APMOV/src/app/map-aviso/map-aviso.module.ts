import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapAvisoPageRoutingModule } from './map-aviso-routing.module';

import { MapAvisoPage } from './map-aviso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapAvisoPageRoutingModule
  ],
  declarations: [MapAvisoPage]
})
export class MapAvisoPageModule {}
