import 'rxjs/add/operator/map';

import { Inject, Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

//import { AuthProviders, AuthMethods, FirebaseAuthState, AngularFireAuth, FirebaseApp } from 'angularfire2';
@Injectable()
export class Auth {

  private authState: Observable<firebase.User | null>;
  private auth: any;

  get authenticated(): boolean {
    return this.authState !== null;
  }

  // get uid(): string {
  //   return this.authState.uid;
  // }

  constructor(private auth$: AngularFireAuth) {
     this.authState = auth$.authState;
  }

  getAuth() {
    return this.authState;
    // this.auth$.subscribe((state: FirebaseAuthState) => {
    //   this.authState = state;
    // });
    // return this.auth$;
  }

  login(credentials: { email: string, password: string }) {
    if (credentials.email === null || credentials.password === null) {
      return Promise.reject("Please insert credentials");
    } else {
      return this.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    }
  }

  register(credentials: { email: string, password: string }) {
    console.log('register');
  }



  signOut() {
    this.auth.signOut();
  }
}