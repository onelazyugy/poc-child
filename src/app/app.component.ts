import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child app';
  message = '';

  submit = () => {
    console.log(this.message);
    parent.postMessage(
    {
      messageFromParent: this.message
    },
    'http://localhost:4201/');
  }
}
