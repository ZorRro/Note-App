import { Component, OnInit } from "@angular/core";
import { Note } from "src/app/model/note.model";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { UserService } from "src/app/service/user.service";

@Component({
  selector: "app-note-view",
  templateUrl: "./note-view.component.html",
  styleUrls: ["./note-view.component.css"]
})
export class NoteViewComponent implements OnInit {
  note: Note;
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      console.log(paramMap);
      const id = paramMap["params"].noteId;
      this.note = this.userService.getNoteDetails(id);
    });
  }
}
