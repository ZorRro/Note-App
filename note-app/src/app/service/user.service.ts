import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { User } from "../model/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private apiUserUri = environment.baseDomain + "serverUser/";
  constructor(private http: HttpClient) {}

  retrieveUserData(userId) {
    return this.http.get<User>(this.apiUserUri + userId);
  }
}
