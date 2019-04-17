import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSidebar]',
  exportAs: 'appSidebar'
})

export class SidebarDirective {
  @HostBinding('class.icon-sidebar') toggle = false;

  @HostListener('click') dropdownToggle() {
      this.toggle = !this.toggle;
      console.log('clicked');
  }

  constructor() { }

}
