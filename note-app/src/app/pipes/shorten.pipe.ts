import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shorten"
})
export class ShortenPipe implements PipeTransform {
  transform(data: string, length: number = 30): any {
    return data.length >= length
      ? data.substr(0, length) + "..."
      : data.substr(0, length) + "...";
  }
}
