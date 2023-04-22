import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { environment } from 'src/environments/environment';

const app = initializeApp(environment);
const auth = getAuth(app);

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoRegister(){
    this.router.navigate(['/register'])
  }
  
  gotoAccount(){
    this.router.navigate(['/account']);
  }

  gotoHome(){
    this.router.navigate(['/home']);
  }




}
