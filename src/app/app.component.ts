import { Component, OnInit } from '@angular/core';
// import {CONTACTS} from "./constant";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'child app';
  message = '';
  messageFromParent = '';
  contacts = [];
  // formattedContacts = [];

  ngOnInit(): void {
    // console.log(CONTACTS);
    // const contacts = CONTACTS[0];
    
    // contacts.map((contact) => {
    //   const givenName = contact.name.givenName;
    //   console.log(givenName);
    //   const phoneNumber = contact.phoneNumbers[0].value;
    //   console.log(phoneNumber);
    //   this.formattedContacts.push({name: givenName, phone: phoneNumber});
    // });
    // this.contacts = CONTACTS;


    if (window.addEventListener) {
      window.addEventListener('message', (event) => {
        const dataFromChildIframe = event.data;
        console.log(dataFromChildIframe);
        const data = dataFromChildIframe.data;
        if (dataFromChildIframe.action === 1) {
          this.messageFromParent = data;
        } else {
          this.contacts = data;
          // const toBeFormatedContacts = data;
          // toBeFormatedContacts.map((contact) => {
          //   const givenName = contact.name.givenName;
          //   const phoneNumber = contact.phoneNumbers[0].value;
          //   this.formattedContacts.push({name: givenName, phone: phoneNumber});
          // });
        }
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
    console.log('posting to parent...');
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
