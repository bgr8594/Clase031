import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Menú', url: '/folder/Menu', icon: 'cafe' },
    { title: 'Comentarios', url: '/folder/Comentarios', icon: 'paper-plane' },
    { title: 'Favoritos', url: '/folder/Favoritos', icon: 'heart' }
  ];

  public labels = [];
  constructor() {}
}
