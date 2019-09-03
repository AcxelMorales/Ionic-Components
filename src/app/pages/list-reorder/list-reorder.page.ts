import { Component } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
})
export class ListReorderPage {

  public languages: string[] = ['Java', 'JavaScript', 'PHP', 'C#', 'Python', 'Go'];

  constructor() { }

  public reorder(evt: any): void {
    const im = this.languages.splice(evt.detail.from, 1)[0];
    this.languages.splice(evt.detail.to, 0, im);
    evt.detail.complete();
  }

  public onClick(): void {
    console.log(this.languages);
  }

}
