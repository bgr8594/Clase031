import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-recompensas',
  templateUrl: './recompensas.page.html',
  styleUrls: ['./recompensas.page.scss'],
})
export class RecompensasPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { }
  menuType: string = 'overlay';
  mascotas: any[] = [];


  ngOnInit() {
    this.mascotas = JSON.parse(localStorage.getItem("Mascotas") || "[]");
    
  }


  gotoMapa() {
    this.navCtrl.navigateForward('/map-aviso');
  }
  gotoRecompensas() {
    this.navCtrl.navigateForward('/recompensas');
  }
}
