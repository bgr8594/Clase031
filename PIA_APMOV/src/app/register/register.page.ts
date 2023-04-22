import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { environment } from 'src/environments/environment';

const app = initializeApp(environment);
const auth = getAuth(app);


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoAccount(){
    this.router.navigate(['/account']);
  }
  gotoHome(){
    this.router.navigate(['/home']);
  }

  gotoLogin(){
    this.router.navigate(['/login']);
  }

}
