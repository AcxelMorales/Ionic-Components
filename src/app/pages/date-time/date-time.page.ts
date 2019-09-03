import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
})
export class DateTimePage implements OnInit {

  customPickerOptions: any;
  customdate;

  public title: string = 'date time';
  dateNow: Date = new Date();

  constructor() { }

  public changeDate(evt: any): void {
    console.log(evt);
    console.log(evt.detail.value);
  }

  ngOnInit(): void {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (date: Object) => {
          console.log(date);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

}
