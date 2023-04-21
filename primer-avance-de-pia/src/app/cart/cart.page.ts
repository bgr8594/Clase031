import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  selectedItems = [];
  total = 0;

  constructor(
    private cartService: CartService,
    private router: Router) {
    }

  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};

    for(let obj of items){
      /*selected[obj.id] = {...obj, count:1}; */
    }

    /* this.selectedItems = Object.keys(selected).map(key => selected[key]) */
    console.log('items: ', this.selectedItems);
    /*this.total = this.selectedItems.reduce((a,b) => a + (b.quantity *b.price), 0 );*/
  }

  remove(){
    this.cartService.removeCart();
    this.router.navigate(["/menu"]);
  }

  checkout() {

  }
}
