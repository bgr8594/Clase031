import { Component, OnInit } from '@angular/core';
import { Menu } from '../../interface/menu';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../../service/auth.service';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { MenuServiceService } from '../../service/menu-service.service';

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
    icono: 'folder-outline'},
    
  ];

  isLoged : any = false;

  constructor(private authService: AuthService, private router: Router, private menuService: MenuServiceService) {
    onAuthStateChanged(this.authService.getStateAuth(), user=>{
      if(user!=null && user != undefined){
        this.isLoged = true;
      }
     });
   }

  ngOnInit() {
    
  }

  navegar(link: string){
    this.router.navigate([link]);
  }

  onLogout(){
    signOut(this.authService.getStateAuth()).then(response=>{
      console.log("Logout!");
      this.menuService.setTitle('login');
      this.router.navigateByUrl('/login');
    }).catch(error => {})
  }

}
