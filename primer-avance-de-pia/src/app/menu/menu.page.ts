import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  postres: any = [];

  constructor(
    private router:Router,
    private http: HttpClient) { }

  ngOnInit() {
    console.log("hola");
    this.getPostre().subscribe(res=>{
      console.log("Res", res)
      this.postres = res;
    });
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

}
