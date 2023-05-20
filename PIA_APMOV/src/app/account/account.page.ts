import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  menuType: string = 'overlay';
  nombreUsuario: string = '';

  constructor(
    private route: ActivatedRoute,
    private storage: Storage

  ) { }


  async ngOnInit() {
    await this.storage.create();

    this.nombreUsuario = await this.storage.get('user');
  }

}
