import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { Note } from "src/app/model/note.model";
import { UserService } from "src/app/service/user.service";
import { NoteService } from "src/app/service/note.service";

class UserNote implements Note {
  id: string;
  title: string;
  author: string;
  content: string;
  createdOn: Date;
  lastModified: Date;
}

@Component({
  selector: "app-new-note",
  templateUrl: "./new-note.component.html",
  styleUrls: ["./new-note.component.css"]
})
export class NewNoteComponent implements OnInit {
  constructor(
    private userService: UserService,
    private noteService: NoteService
  ) {}

  ngOnInit() {}

  onSubmit(noteForm: NgForm) {
    let note: UserNote = new UserNote();
    note.title = noteForm.value.noteTitle;
    note.content = noteForm.value.noteContent;
    note.createdOn = new Date();
    note.lastModified = new Date();
    console.log(note);

    this.noteService.addNote(note).subscribe(
      (savedNote: Note) => {
        console.log("New note added : ");
        console.log(savedNote);
      },
      err => {
        console.error("Error occurred : " + err);
      }
    );
  }
}
