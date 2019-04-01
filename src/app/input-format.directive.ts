import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // @Input() appInputFormat;
  @Input('appInputFormat') format;
  @HostListener('blur') onBlur() {
    const value = this.el.nativeElement.value;
    // console.log(this.format);
    // console.log(value);
    if (this.format === 'uppercase') {
      this.el.nativeElement.value = value.toUpperCase();
    } else
    if (this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    }
    this.el.nativeElement.style.borderColor = 'black';
  }
  @HostListener('focus') onfocus() {
    this.el.nativeElement.style.borderColor = 'yellow';
  }
  // @HostListener('unfocus') onunfocus() {
  //   this.el.nativeElement.style.borderColor = 'yellow';
  // }

  constructor( private  el: ElementRef) {
  }

}
