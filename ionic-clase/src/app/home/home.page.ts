import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) {}

  async showMyId() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Matricula',
      message: '1973080',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
