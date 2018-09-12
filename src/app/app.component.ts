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
    const localhostParentURL = 'http://localhost:4201/';
    // const parentURL = 'http://mfp.primericaonline.com:9080/priapp/index.html#/';
    // const parentURL = 'https://dev.primericaonline.com/priapp/#/turboApps';
    // local mobile app
    const parentURL = 'file:///android_asset/www/index.html#/turboApps';
    const data = {
      action: 1,
      data: this.message
    };
    parent.postMessage(
    {
      messageFromChild: data
    },
    parentURL);
  }

  importContact = () => {
    // const parentURL = 'http://mfp.primericaonline.com:9080/priapp/index.html#/';
    // const parentURL = 'https://dev.primericaonline.com/priapp/#/turboApps';
    // local mobile app
    const parentURL = 'file:///android_asset/www/index.html#/turboApps';
    const data = {
      action: 2,
      data: 'get contacts'
    }
    parent.postMessage(
    {
      messageFromChild: data
    },
    parentURL);
  }
}
