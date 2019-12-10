import { Injectable } from '@angular/core';
import { reject, resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      // tslint:disable-next-line: no-shadowed-variable
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
