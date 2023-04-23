import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

<<<<<<< Updated upstream
  gotoAccount(){
      this.router.navigate(['/account']);
=======
  gotoHome(){
    this.router.navigate(['/home'])
  }  

  gotoLogin(){
    this.router.navigate(['/login'])
  }

  gotoAcount(){
    this.router.navigate(['/account'])
  }

  gotoRegister(){
    this.router.navigate(['/register'])
  }

  gotoRadar(){
    this.router.navigate(['/radar'])
>>>>>>> Stashed changes
  }
}
