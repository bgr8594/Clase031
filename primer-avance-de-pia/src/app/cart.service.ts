import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = []

  getCart(){
    return this.cart;
  }

  /*addProduct(product){
    this.cart.push(product);
  }*/

  removeCart(){
    this.cart = [];
  }

  constructor() { }
}
