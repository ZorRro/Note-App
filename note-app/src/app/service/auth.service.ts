import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
  // private requestUri = 'http://localhost:3090/auth/login';
  private requestUri = 'auth/login';
  private isLoggedIn = false;
  private userId: string;
  constructor(private httpClient: HttpClient) {

  }

  public doLogin(userData) {
    return this.httpClient.post(this.requestUri, userData, { observe: 'response' });
  }

  public doLogout() {
    if ( localStorage.getItem('token')) {
      localStorage.removeItem('token');
      this.updateUserStatus(this.userId);
    }
    return true;
  }
  public getLoginState() {
    return this.isLoggedIn;
  }

  private setLoginState(state: boolean) {
    this.isLoggedIn = state;
  }


  updateUserStatus(userId: string) {
    if (localStorage.getItem('token')) {
      this.setLoginState(true);
      this.userId = userId;
    } else {
      this.setLoginState(false);
      this.userId = '';
    }
  }

}
