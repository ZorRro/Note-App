import { Component, OnInit } from "@angular/core";
import { Note } from "src/app/model/note.model";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { NoteService } from "src/app/services/note.service";
import { HttpResponse } from "@angular/common/http";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-note-view",
  templateUrl: "./note-view.component.html",
  styleUrls: ["./note-view.component.css"]
})
export class NoteViewComponent implements OnInit {
  note: Note;
  isEditing: boolean = false;
  noteContent: string;

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
    });
  }

  deleteNote() {
    if (this.note) {
      this.noteService.removeNote(this.note["_id"]).subscribe(
        (res: HttpResponse<any>) => {
          if (res.status === 204) {
            console.log("Note successfully deleted.");
          }
          this.router.navigate(["user/dashboard"]);
        },
        err => {
          console.error(err);
        }
      );
    }
  }

  editNote() {
    this.router.navigate(["/user/note/edit/", this.note["_id"]]);
  }
}
