import { User } from './../interface/user';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { initializeApp } from "firebase/app";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { getDatabase } from "firebase/database";


const firebaseApp = initializeApp(environment.firebaseConfig);
const dbCloudFirestore = getFirestore(firebaseApp);

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public isLoged : any = false;
  auth: Auth;
  db = dbCloudFirestore;

  constructor() { 
    this.auth = getAuth(firebaseApp);
    onAuthStateChanged(this.auth, user => {
      if(user!= undefined || user != null){
        this.isLoged = user;
      }
    })
  }

  getStateAuth(){
    return this.auth;
   }

  //login
  onLogin(user: User): Promise<any>{
  return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }
  //register
  onRegister(user: User): Promise<any>{
  return  createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }
}
