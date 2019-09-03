import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
})
export class SearchbarPage implements OnInit, OnDestroy {

  albums   : any[] = [];
  txtSearch: string = '';
  subscription: Subscription = new Subscription();

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.subscription = this.dataService.getAlbums()
      .subscribe(albums => this.albums = albums);
  }

  public search(event: any): void {
    this.txtSearch = event.detail.value;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
