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
  private _apiUserUri = environment.baseDomain + "serverUser/";
  private _deleteUserUri = this._apiUserUri + "delete";
  private _updateUserUri = this._apiUserUri + "update";

  private userNotes: Note[];
  constructor(private http: HttpClient) {}

  setUser(user: User) {
    this._user = user;
  }

  getUser() {
    return this._user;
  }

  retrieveUserData(userId) {
    return this.http.get<User>(this._apiUserUri + userId);
  }

  getNoteDetails(id: string) {
    return this._user.notes.find(userNote => userNote["_id"] == id);
  }

  updateUser(user: User): Observable<User> {
    return this.http.post<User>(this._updateUserUri, user);
  }

  deleteUser(): Observable<HttpResponse<any>> {
    // this request will be intercepted and the userID
    // details will be added by the interceptor.
    return this.http.get(this._deleteUserUri, { observe: "response" });
  }

  updateUserNote(savedNote: Note) {
    const currentNote = this._user.notes.find(
      (note: Note) => note["_id"] === savedNote["_id"]
    );
    this._user.notes.splice(this._user.notes.indexOf(currentNote), 1);
    this._user.notes.push(savedNote);
  }
}
