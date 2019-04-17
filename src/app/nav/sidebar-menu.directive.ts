import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSidebarMenu]',
  exportAs: 'appSidebarMenu'
})
export class SidebarMenuDirective {
  @HostBinding('class.icon-menu') toggle = false;

  @HostListener('click') dropdownToggle() {
      this.toggle = !this.toggle;
      console.log('clicked');
  }

  constructor() { }

}
