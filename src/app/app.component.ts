import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'child app';
  message = '';
  messageFromParent = '';

  ngOnInit(): void {
    if (window.addEventListener) {
      window.addEventListener('message', (event) => {
        const dataFromChildIframe = event.data;
        console.log(dataFromChildIframe);
        this.messageFromParent = dataFromChildIframe.messageFromParent;
      });
    }
  }

  submit = () => {
    console.log(this.message);
    parent.postMessage(
    {
      messageFromChild: this.message
    },
    'http://localhost:4201/');
  }
}
