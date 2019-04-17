import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngPractice';

  classApplied = false;
  toggleClass() {
    this.classApplied = !this.classApplied;
  }

  classAppliedArrow = false;
  toggleClassAccArr(){
    this.classAppliedArrow = !this.classAppliedArrow;
  }

  public status: boolean = false;
  siderbarEvent(){
      this.status = !this.status;       
  }

  
}
