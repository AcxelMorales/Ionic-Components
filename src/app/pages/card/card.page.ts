import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
})
export class CardPage implements OnInit {

  public title: string = 'card';

  constructor() { }

  ngOnInit() {
  }

}
