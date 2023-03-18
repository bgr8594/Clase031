import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth';
import { Firestore, collection, addDoc} from '@angular/fire/firestore';
import User from 'src/interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class FCFMServiceService {

  constructor(private firestore: Firestore, private auth: Auth) { }

  addUser(user:User){
    const userRef = collection(this.firestore, 'users');
    return addDoc(userRef, user)
  }

  register(user: User){
    return createUserWithEmailAndPassword(this.auth, user.email, user.password)
  }

  login(user: User){
    return signInWithEmailAndPassword(this.auth, user.email, user.password)
  }
}
