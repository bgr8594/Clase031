import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Capacitor } from '@capacitor/core';
import { initializeApp } from "firebase/app"
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth, onAuthStateChanged, indexedDBLocalPersistence, initializeAuth  } from "firebase/auth";
import { User } from '../model/user';
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { getDatabase } from "firebase/database";

//const firebaseApp = initializeApp(environment.firebaseConfig);
//const dbCloudFirestore = getFirestore(firebaseApp);

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoged : any = false;
  auth: Auth;
  dbCloudFirestore: any;

  constructor() {
    const firebaseApp = initializeApp(environment.firebaseConfig);
    if (Capacitor.isNativePlatform()) {
      initializeAuth(firebaseApp, {
        persistence: indexedDBLocalPersistence
      });

      this.dbCloudFirestore = getFirestore(firebaseApp);

    }

    this.auth = getAuth(firebaseApp);
    onAuthStateChanged(this.auth, user => {
      if(user!= undefined || user != null){
        this.isLoged = user;
      }
    });
   }

   tieneSesion(){
    return this.isLoged;
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



  updateLugares(id: any, lugar: any): Promise<any>{
    const docRef = doc(this.dbCloudFirestore, 'lugar', id);
    const lugarAux = {nombre: lugar.nombre,
      latitud: lugar.latitud,
      longitud: lugar.longitud
    };
  
    return setDoc(docRef, lugarAux);
  }

  deleteLugar(id: any): Promise<any>{
    const docRef = doc(this.dbCloudFirestore, 'lugar', id);
    return deleteDoc(docRef);
  }

}
