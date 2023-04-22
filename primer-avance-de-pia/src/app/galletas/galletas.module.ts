import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalletasPageRoutingModule } from './galletas-routing.module';

import { GalletasPage } from './galletas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalletasPageRoutingModule
  ],
  declarations: [GalletasPage]
})
export class GalletasPageModule {}
