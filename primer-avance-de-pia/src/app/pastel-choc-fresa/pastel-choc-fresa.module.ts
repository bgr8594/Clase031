import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastelChocFresaPageRoutingModule } from './pastel-choc-fresa-routing.module';

import { PastelChocFresaPage } from './pastel-choc-fresa.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastelChocFresaPageRoutingModule
  ],
  declarations: [PastelChocFresaPage]
})
export class PastelChocFresaPageModule {}
