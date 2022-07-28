import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml', standalone: true})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  transform(value: string): SafeHtml {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}