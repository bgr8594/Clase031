import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'favs',
    loadChildren: () => import('./favs/favs.module').then( m => m.FavsPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'pastel-choc-fresa',
    loadChildren: () => import('./pastel-choc-fresa/pastel-choc-fresa.module').then( m => m.PastelChocFresaPageModule)
  },
  {
    path: 'solle',
    loadChildren: () => import('./solle/solle.module').then( m => m.SollePageModule)
  },
  {
    path: 'brownie',
    loadChildren: () => import('./brownie/brownie.module').then( m => m.BrowniePageModule)
  },
  {
    path: 'galletas',
    loadChildren: () => import('./galletas/galletas.module').then( m => m.GalletasPageModule)
  },
  {
    path: 'postre/:id',
    loadChildren: () => import('./postre/postre.module').then( m => m.PostrePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
