import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

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

<<<<<<< Updated upstream
=======
  gotoRadar(){
    this.router.navigate(['/radar'])
  }

>>>>>>> Stashed changes

}
