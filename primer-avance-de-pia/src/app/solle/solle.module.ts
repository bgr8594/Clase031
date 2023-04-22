import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SollePageRoutingModule } from './solle-routing.module';

import { SollePage } from './solle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SollePageRoutingModule
  ],
  declarations: [SollePage]
})
export class SollePageModule {}
