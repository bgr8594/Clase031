import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoCancionEditComponent } from './catalogo-cancion-edit/catalogo-cancion-edit.component';
import { CatalogoCancionIndexComponent } from './catalogo-cancion-index/catalogo-cancion-index.component';
import { CatalogoCancionNewComponent } from './catalogo-cancion-new/catalogo-cancion-new.component';
import { CatalogoRoutingModule } from './catalogo-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    CatalogoCancionEditComponent, 
    CatalogoCancionIndexComponent, 
    CatalogoCancionNewComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    FormsModule,
    IonicModule,
  ]
})
export class CatalogoModule { }
