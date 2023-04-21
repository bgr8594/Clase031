import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio de Sesion', url: '/login', icon: 'person-circle' },
    { title: 'Menú', url: '/menu', icon: 'cafe' },
    { title: 'Favoritos', url: '/favs', icon: 'heart' },
    { title: 'Carrito', url : '/cart', icon: 'cart'}
  ];

  public labels = [];
  constructor() {}
}
