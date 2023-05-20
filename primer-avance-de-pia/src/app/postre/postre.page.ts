import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-postre',
  templateUrl: './postre.page.html',
  styleUrls: ['./postre.page.scss'],
})
export class PostrePage implements OnInit {

  postres: any = [];
  id: any;
  cantidad:number = 1;
  finalId!: number;
  nombre!: string;
  imagen!: string;
  descrip!: string;
  precio!: number;
  sabor!: string;
  cart: any = [];
  total!: number;


  constructor(
    private router:Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.cart = this.cartService.getCart();
    this.finalId = this.id - 1;
    console.log("id", this.id);

    this.getPostre().subscribe(res=>{
      console.log("Res", res)
      this.postres = res;
      this.imagen = this.postres[this.finalId].imagen;
      this.nombre = this.postres[this.finalId].nombre;
      this.sabor = this.postres[this.finalId].sabor;
      this.descrip = this.postres[this.finalId].descrip;
      this.precio = this.postres[this.finalId].precio;
    });

    this.cantidad = 1
    this.total = this.precio
  }

  getPostre(){
    return this.http
    .get("assets/files/postres.json")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }

  /*addCart(id: any, cantidad: any){
    this.product = {
      "id":id,
      "cantidad":cantidad,
      "nombre":this.nombre,
      "precio":this.precio
    }
    this.cartService.addProduct(this.product);
  }*/

}
