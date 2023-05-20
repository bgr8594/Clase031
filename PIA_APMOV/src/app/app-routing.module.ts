import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./forms/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./forms/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recompensas',
    loadChildren: () => import('./recompensas/recompensas.module').then( m => m.RecompensasPageModule)
  },
  {
    path: 'map-aviso',
    loadChildren: () => import('./map-aviso/map-aviso.module').then( m => m.MapAvisoPageModule)
  },
  {
    path: 'radar-mascotas',
    loadChildren: () => import('./radar-mascotas/radar-mascotas.module').then( m => m.RadarMascotasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
