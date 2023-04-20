import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoCancionEditComponent } from './catalogo-cancion-edit/catalogo-cancion-edit.component';
import { CatalogoCancionIndexComponent } from './catalogo-cancion-index/catalogo-cancion-index.component';
import { CatalogoCancionNewComponent } from './catalogo-cancion-new/catalogo-cancion-new.component';

const routes: Routes = [
  { path: '', component: CatalogoCancionIndexComponent },
  { path: 'canciones', component: CatalogoCancionIndexComponent },
          { path: 'nuevo', component: CatalogoCancionNewComponent },
          { path: 'editar', component: CatalogoCancionEditComponent }
       
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
