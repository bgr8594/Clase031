import { Injectable } from '@angular/core';
import { Catalogo } from "../interface/catalogo";

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  juegos: Catalogo[] = [
    {
      nombre: 'Super Mario Bros.',
      descripcion: 'Juego clásico de plataformas.',
      img: 'assets/img/Mario.png',
      rate: 3,
      read: true
    },
    {
      nombre: 'Tetris',
      descripcion: 'Juego de rompecabezas.',
      img: 'assets/img/Tetris.jpg',
      rate: 4,
      read: true
    },
    {
      nombre: 'The Legend of Zelda Breath of the Wild',
      descripcion: 'Juego de acción y aventura',
      img: 'assets/img/Zelda.png',
      rate: 5,
      read: true
    },
    {
      nombre: 'Hi-Fi Rush',
      descripcion: 'Juego de tipo hack slash con diversas mecánicas de ritmo y plataformas',
      img: 'assets/img/HiFiRush.png',
      rate: 4,
      read: true
    },
    {
      nombre: 'Stardew Valley',
      descripcion: 'Juego indie de simulación de granja',
      img: 'assets/img/StardewValley.jpg',
      rate: 4,
      read: true
    },
    {
      nombre: 'BlazBlue',
      descripcion: 'Juego de lucha en 2-D ',
      img: 'assets/img/Blazblue2.jpg',
      rate: 4,
      read: true
    },

  ]

  constructor() { }
}
