import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  menuType: string = 'push';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoMapa(){
    this.router.navigate(['/map-aviso'])
  }  

  gotoLogin(){
    this.router.navigate(['/login'])
  }

  gotoRegister(){
    this.router.navigate(['/register'])
  }

  gotoRecompensas(){
    this.router.navigate(['/recompensas'])
  }

  accountLoged() {
    return false;
  }
}
