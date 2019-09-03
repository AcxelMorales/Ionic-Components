import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

import { Observable } from 'rxjs';

import { DataService } from '../../providers/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
})
export class SegmentPage implements OnInit {

  public title: string = 'segment';
  publisher: string = '';
  @ViewChild(IonSegment, null) segment: IonSegment;
  superHeroes: Observable<any[]>;

  constructor(public _dataService: DataService) { }

  ngOnInit(): void {
    this.segment.value = 'Everyone';
    this.superHeroes = this._dataService.getSuperHeroes();
  }

  public segmentChanged(event: any): void {
    const valueSegment = event.detail.value;

    if (valueSegment === 'Everyone') {
      this.publisher = '';
      return;
    }

    this.publisher = valueSegment;
  }

}
