import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonText]'
})
export class ButtonTextDirective {
  currentText: string;
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.currentText = this.el.nativeElement.innerText;
    this.el.nativeElement.innerText = 'register';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.innerText = this.currentText;
  }
}
