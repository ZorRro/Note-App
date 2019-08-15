import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { User } from "../model/user.model";
import { Note } from "../model/note.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private apiUserUri = environment.baseDomain + "serverUser/";
  private userNotes: Note[];
  constructor(private http: HttpClient) {}

  retrieveUserData(userId) {
    return this.http.get<User>(this.apiUserUri + userId);
  }

  public setUserNotes(notes: Note[]) {
    this.userNotes = notes;
  }

  getNoteDetails(id: string) {
    return this.userNotes.find(userNote => userNote["_id"] == id);
  }
}
