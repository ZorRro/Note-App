import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { UserService } from "src/app/service/user.service";
import { NoteService } from "src/app/service/note.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Note } from "src/app/model/note.model";
import { NgForm } from "@angular/forms";
import { stripHTML } from "src/app/common/util";

@Component({
  selector: "app-note-edit",
  templateUrl: "./note-edit.component.html",
  styleUrls: ["./note-edit.component.css"]
})
export class NoteEditComponent implements OnInit {
  note: Note;
  noteContent: string;
  validContent: boolean;

  constructor(
    private userService: UserService,
    private noteService: NoteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      console.log(paramMap);
      const id = paramMap["params"].noteId;
      this.note = this.userService.getNoteDetails(id);
      this.noteContent = this.note.content;
    });
  }

  updateNote(updateForm: NgForm) {
    // const noteContent = updateForm.value.noteContent;
    const noteId = this.note["_id"];
    const note = {
      id: noteId,
      content: this.noteContent
    };
    this.noteService.updateNote(note).subscribe(
      (note: Note) => {
        if (note) {
          console.log("Note has been updated.");
          this.note = note;
          this.noteService.pushNote(note);
          this.cancelEditing();
        } else {
          console.log("Unexpected. Note was not found.");
        }
      },
      err => console.error
    );
  }

  onChange($event) {
    let content = stripHTML($event);
    if (content.length === 0) {
      this.validContent = false;
    } else {
      this.validContent = true;
    }
  }

  resetNoteContent() {
    this.noteContent = this.note.content;
  }

  cancelEditing() {
    this.router.navigate(["/user/note/view", this.note["_id"]]);
  }
}
