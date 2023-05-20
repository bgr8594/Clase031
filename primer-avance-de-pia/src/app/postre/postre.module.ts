import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostrePageRoutingModule } from './postre-routing.module';

import { PostrePage } from './postre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostrePageRoutingModule
  ],
  declarations: [PostrePage]
})
export class PostrePageModule {}
