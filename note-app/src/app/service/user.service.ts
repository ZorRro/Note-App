import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { User } from "../model/user.model";
import { Note } from "../model/note.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private _user: User = null;
  private apiUserUri = environment.baseDomain + "serverUser/";
  private _deleteUserUri = environment.baseDomain + "serverUser/delete";
  private _updateUserUri = environment.baseDomain + "serverUser/update";

  private userNotes: Note[];
  constructor(private http: HttpClient) {}

  setUser(user: User) {
    this._user = user;
  }

  getUser() {
    return this._user;
  }

  retrieveUserData(userId) {
    return this.http.get<User>(this.apiUserUri + userId);
  }

  setUserNotes(notes: Note[]) {
    this.userNotes = notes;
  }

  getNoteDetails(id: string) {
    return this.userNotes.find(userNote => userNote["_id"] == id);
  }

  updateUser(user: User): Observable<User> {
    return this.http.post<User>(this._updateUserUri, user);
  }

  deleteUser(): Observable<HttpResponse<any>> {
    // this request will be intercepted and the userID
    // details will be added by the interceptor.
    return this.http.get(this._deleteUserUri, { observe: "response" });
  }
}
