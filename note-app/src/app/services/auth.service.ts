import { Injectable, EventEmitter, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private loginUri = environment.baseDomain + "serverAuth/login";
  private singupUri = environment.baseDomain + "serverAuth/signup";
  private activateUri = environment.baseDomain + "serverAuth/activate";
  private resetPasswordUri =
    environment.baseDomain + "serverAuth/reset-password";
  private isLoggedIn = false;
  private _user: User = null;
  @Output() updateEvent: EventEmitter<User> = new EventEmitter();

  constructor(private httpClient: HttpClient) {}
  getToken() {
    return localStorage.getItem("token");
  }

  setUser(user: User) {
    this._user = user;
  }

  getUser() {
    return this._user;
  }

  getUserId() {
    return this._user.id;
  }

  public doSignup(userData) {
    return this.httpClient.post<any>(this.singupUri, userData, {
      observe: "response"
    });
  }

  public doLogin(userData) {
    return this.httpClient.post<User>(this.loginUri, userData);
  }

  public doLogout() {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      this.updateUserStatus(this._user.id);
    }
    return true;
  }

  public getLoginState() {
    return this.isLoggedIn;
  }

  updateUserStatus(userId: string) {
    if (localStorage.getItem("token")) {
      this.isLoggedIn = true;
      this._user.id = userId;
    } else {
      this.isLoggedIn = false;
      this._user = null;
    }
    this.updateEvent.emit(this._user);
  }

  doActivate(identity: string, info: string) {
    return this.httpClient.get(
      `${this.activateUri}?identity=${identity}&info=${info}`
    );
  }

  doInitiateResetPassword(regEmail: string) {
    return this.httpClient.post(
      this.resetPasswordUri + "?action=initiate",
      regEmail
    );
  }

  doResetPassword(token: string, password: string) {
    return this.httpClient.post(this.resetPasswordUri + "?action=reset", {
      password: password,
      token: token
    });
  }
}
