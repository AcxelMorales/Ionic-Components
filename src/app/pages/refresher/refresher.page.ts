import { Component } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
})
export class RefresherPage {

  public title: string = 'refresher';
  items: any[] = [];

  constructor() { }

  public doRefresh(event: any): void {
    setTimeout(() => {
      this.items = new Array(30);
      event.target.complete();
    }, 1500);
  }

}
