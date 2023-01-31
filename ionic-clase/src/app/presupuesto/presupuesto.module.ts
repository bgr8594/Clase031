import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresupuestoPageRoutingModule } from './presupuesto-routing.module';

import { PresupuestoPage } from './presupuesto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresupuestoPageRoutingModule
  ],
  declarations: [PresupuestoPage]
})
export class PresupuestoPageModule {}
