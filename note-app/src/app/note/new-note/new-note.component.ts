import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { Note } from "src/app/model/note.model";
import { UserService } from "src/app/service/user.service";
import { NoteService } from "src/app/service/note.service";
import { Router } from "@angular/router";
import { stripHTML } from "src/app/common/util";

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
  validContent: boolean = false;

  constructor(
    private userService: UserService,
    private noteService: NoteService,
    private router: Router
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
        this.noteService.pushNote(savedNote);
        this.router.navigate(["/user/note/view/", savedNote["_id"]]);
      },
      err => {
        console.error("Error occurred : " + err);
      }
    );
  }

  goToDashboard() {
    this.router.navigate(["/user/dashboard"]);
  }

  onChange($event) {
    let content = stripHTML($event);
    this.validContent = content.length === 0 ? false : true;
  }
}
