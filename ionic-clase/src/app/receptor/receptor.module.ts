import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceptorPageRoutingModule } from './receptor-routing.module';

import { ReceptorPage } from './receptor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceptorPageRoutingModule
  ],
  declarations: [ReceptorPage]
})
export class ReceptorPageModule {}
