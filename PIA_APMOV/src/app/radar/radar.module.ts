import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadarPageRoutingModule } from './radar-routing.module';

import { RadarPage } from './radar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadarPageRoutingModule
  ],
  declarations: [RadarPage]
})
export class RadarPageModule {}
