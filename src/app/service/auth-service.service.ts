import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = firebase.auth();
  constructor() {}

  async login(user: any) {
    const userL = await this.auth.signInWithEmailAndPassword(
      user.email,
      user.password
    );
    const token = await userL.user!.getIdToken();
    this.sendTokenToLocalStorage(token);
  }

  sendTokenToLocalStorage(token: string) {
    localStorage.setItem('token', token);
    return;
  }
}
