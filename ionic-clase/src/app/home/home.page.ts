import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Mensaje de alerta',
      subHeader: 'Mensaje importante',
      message: '¡Este es un mensaje de alerta!',
      buttons: ['De Acuerdo'],
    });

    await alert.present();
  }


}
