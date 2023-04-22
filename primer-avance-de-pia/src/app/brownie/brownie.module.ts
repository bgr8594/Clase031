import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowniePageRoutingModule } from './brownie-routing.module';

import { BrowniePage } from './brownie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowniePageRoutingModule
  ],
  declarations: [BrowniePage]
})
export class BrowniePageModule {}
