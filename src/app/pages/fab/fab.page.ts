import { Component } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
})
export class FabPage {

  public title: string = 'fab';
  data = new Array(100);

  constructor() { }

}
