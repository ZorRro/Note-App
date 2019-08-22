import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "keepHtml"
})
export class KeepHtmlPipe implements PipeTransform {
  constructor(private sanitazer: DomSanitizer) {}
  transform(value: string): any {
    return this.sanitazer.bypassSecurityTrustHtml(value);
  }
}
