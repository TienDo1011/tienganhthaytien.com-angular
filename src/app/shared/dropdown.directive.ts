import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isShow = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.isShow = !this.isShow;
    const menu = this.el.nativeElement.querySelector('div.dropdown-menu');
    const ariaExpanded = this.el.nativeElement.querySelector('a');

    this.renderer.addClass(menu, 'show');
    this.renderer.setAttribute(ariaExpanded, 'aria-expanded', 'true');
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave($event) {
    this.isShow = !this.isShow;
    const menu = this.el.nativeElement.querySelector('div.dropdown-menu');
    const ariaExpanded = this.el.nativeElement.querySelector('a');

    this.renderer.removeClass(menu, 'show');
    this.renderer.setAttribute(ariaExpanded, 'aria-expanded', 'false');
  }
}
