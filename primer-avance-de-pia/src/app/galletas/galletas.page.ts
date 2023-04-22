import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galletas',
  templateUrl: './galletas.page.html',
  styleUrls: ['./galletas.page.scss'],
})
export class GalletasPage implements OnInit {

  cantidad: number=1;
  constructor() { }

  ngOnInit() {
  }

}
