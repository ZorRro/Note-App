import { Injectable } from "@angular/core";
import { Note } from "../model/note.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class NoteService {
  private _noteBaseApi = environment.baseDomain + "serverUser/notes/";
  note: Note;
  constructor(private http: HttpClient, private userService: UserService) {}

  addNote(newNote: Note) {
    return this.http.post<Note>(this._noteBaseApi + "add", { note: newNote });
  }

  removeNote(noteId: string) {
    return this.http.delete(this._noteBaseApi + "delete/" + noteId, {
      observe: "response"
    });
  }

  updateNote(note: { id: string; content: string }) {
    return this.http.post(this._noteBaseApi + "update", note);
  }

  //Updating the list of notes in this service.
  pushNote(savedNote: Note) {
    this.userService.updateUserNote(savedNote);
  }
}
