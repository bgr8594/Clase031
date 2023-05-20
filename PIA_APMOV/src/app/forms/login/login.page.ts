import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/user';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  data = {
    user: "",
    password: ""
  };

  constructor(
    private storage: Storage,
    private alertController: AlertController,
    private navCtrl: NavController
  ) { }

  async ngOnInit() {
    await this.storage.create();
  }

  async loginUser() {
    const user = await this.storage.get('user');
    const password = await this.storage.get('password');

    if (user === this.data.user && password === this.data.password) {
      this.goToHome();
    } else {
      this.succesfullAlert();
    }
  }

  async goToHome() {
    const user = await this.storage.get('user');
    this.navCtrl.navigateForward('/account', { queryParams: { userName: user } });
  }

  async succesfullAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: '',
      message: 'El Usuario no existe o su contraseña es incorrecta.',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
