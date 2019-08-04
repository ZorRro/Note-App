import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
  private requestUri = 'http://localhost:3090/auth/login';
  private isLoggedIn = false;
  constructor(private httpClient: HttpClient) {

  }

  doLogin(userData) {
    return this.httpClient.post<User[]>(this.requestUri, userData);
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  setIsLoggedIn(state: boolean) {
    this.isLoggedIn = state;
  }

}
