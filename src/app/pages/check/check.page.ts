import { Component } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
})
export class CheckPage {

  public title: string = 'Checkbox';

  data: any[] = [
    { name: 'primary', selected: false },
    { name: 'secondary', selected: true },
    { name: 'tertiary', selected: false },
    { name: 'success', selected: true },
  ];

  constructor() { }

  onClick(check: any): void {
    console.log(check);
  }

}
