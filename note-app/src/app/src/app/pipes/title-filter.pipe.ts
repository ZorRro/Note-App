import { Pipe, PipeTransform } from "@angular/core";
import { Note } from "src/app/model/note.model";

@Pipe({
  name: "titleFilter"
})
export class TitleFilterPipe implements PipeTransform {
  transform(list: Note[], title: string): Note[] {
    if (
      list !== undefined &&
      title != undefined &&
      list.length > 0 &&
      title.length > 0
    ) {
      let noteList = list.filter(note => note.title.indexOf(title) != -1);
      return noteList;
    } else {
      return list;
    }
  }
}
