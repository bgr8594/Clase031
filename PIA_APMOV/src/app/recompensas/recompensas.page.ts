import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recompensas',
  templateUrl: './recompensas.page.html',
  styleUrls: ['./recompensas.page.scss'],
})
export class RecompensasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoHome(){
    this.router.navigate(['/home'])
  }  

  gotoLogin(){
    this.router.navigate(['/login'])
  }

  gotoRegister(){
    this.router.navigate(['/register'])
  }
}
