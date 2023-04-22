import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brownie',
  templateUrl: './brownie.page.html',
  styleUrls: ['./brownie.page.scss'],
})
export class BrowniePage implements OnInit {

  cantidad:number = 1;
  constructor() { }

  ngOnInit() {
  }

}
