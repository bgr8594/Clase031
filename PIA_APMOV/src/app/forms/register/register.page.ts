import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public alertButtons = ['OK'];

  data = {
    user: "",
    password: ""
  };


  constructor(
    private router: Router,
    private storage: Storage,
    private alertController: AlertController,
  ) { }

  async ngOnInit() {
    await this.storage.create();
  }

  registerUser() {
    if (this.data.user == "" || this.data.password == "") {
      this.errorAlert();
    }
    else {
      this.storage.set("user", this.data.user).then((val) => {
        this.storage.set("password", this.data.password).then((val) => {
          this.succesfullAlert();
          this.goToLogin();
        })
      })
    }

  }

  async succesfullAlert() {
    const alert = await this.alertController.create({
      header: 'Enhorabuena!',
      subHeader: '',
      message: 'Usuario Creado Exitosamente!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      header: 'Ups!',
      subHeader: '',
      message: 'Ingrese correctamente los datos.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
