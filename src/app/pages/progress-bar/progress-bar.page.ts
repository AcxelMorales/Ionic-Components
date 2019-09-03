import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
})
export class ProgressBarPage {

  public title: string = 'progressbar and range';
  public value: number = 0.00;

  constructor() { }

  public changeRange(event: any): void {
    this.value = event.detail.value / 100;
  }

}
