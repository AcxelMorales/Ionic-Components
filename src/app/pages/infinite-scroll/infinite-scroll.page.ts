import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
})
export class InfiniteScrollPage {

  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;

  public title: string = 'infinite scroll';
  data: any[] = new Array(20);

  constructor() { }

  public loadData(evt: any): void {
    if (this.data.length >= 60) {
      evt.target.complete();
      this.infiniteScroll.disabled = true;
      return;
    }

    setTimeout(() => {
      const newData = new Array(20);
      this.data.push(...newData);
      evt.target.complete();
    }, 1000);
  }

}
