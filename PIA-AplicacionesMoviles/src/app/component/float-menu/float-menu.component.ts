import { Component, OnInit } from '@angular/core';
import { Menu } from '../../interface/menu';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent  implements OnInit {

  
  datosMenu: Menu[] =[
    {nombre: 'home',enlace:'/home',
    icono:'home-outline'},
    {nombre: 'Catalogo', enlace: '/main/catalogo',
    icono: 'folder-outline'}
    
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  navegar(link: string){
    this.router.navigate([link]);
  }

}
