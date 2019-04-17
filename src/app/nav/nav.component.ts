import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // h1Style: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
  // firstClick() {
  //   console.log('clicked');
  //   this.h1Style = true;
  // }
  // public status: boolean = false;
  // siderbarEvent(){
  //     this.status = !this.status;       
  // }

}
