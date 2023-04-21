import { Component, OnInit } from '@angular/core';
import { Catalogo } from '../interface/catalogo';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  juegos: Catalogo[] = [
    {
    nombre: 'Super Mario Bros.',
    descripcion: 'Juego clásico de plataformas.',
    img: 'assets/img/Mario.png'
  },
  {
    nombre: 'Tetris',
    descripcion: 'Juego de rompecabezas.',
    img: 'assets/img/Tetris.jpg'
  },
  {
    nombre: 'The Legend of Zelda Breath of the Wild',
    descripcion: 'Juego de acción y aventura',
    img: 'assets/img/Zelda.png'
  },
  {
    nombre: 'Hi-Fi Rush',
    descripcion: 'Juego de tipo hack and slash con diversas mecánicas de ritmo y plataformas',
    img: 'assets/img/HiFiRush.png'
  },
  {
    nombre: 'Stardew Valley',
    descripcion: 'Juego indie de simulación de granja',
    img: 'assets/img/StardewValley.jpg'
  },
  {
    nombre: 'BlazBlue',
    descripcion: 'Juego de lucha en 2-D ',
    img: 'assets/img/Blazblue2.jpg'
  },
  
  ]

  constructor() { }

  ngOnInit() {
  }

}
