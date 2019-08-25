import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "stripHTML"
})
export class StripHTMLPipe implements PipeTransform {
  transform(value: string): string {
    return value
      ? value.length > 0
        ? value.replace(/<[^>]*>?/gm, "")
        : value
      : "";
  }
}
