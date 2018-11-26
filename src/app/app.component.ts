import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  responsesCollapsed = true;
  commentsCollapsed = false;
  inputFocused = false;

  toggleResponses () {
    this.responsesCollapsed = !this.responsesCollapsed;
  }
  toggleComments () {
    this.commentsCollapsed = !this.commentsCollapsed;
  }
  focusInput () {
    this.inputFocused = !this.inputFocused;
  }
}
