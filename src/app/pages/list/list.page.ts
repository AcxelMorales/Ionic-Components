import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { IonList, ToastController } from '@ionic/angular';

import { DataService } from '../../providers/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
})
export class ListPage implements OnInit, OnDestroy {

  @ViewChild('list', null) list: IonList;
  public title: string = 'contacts'
  users: any[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    public _dataService: DataService,
    private toastController: ToastController
  ) { }

  ngOnInit(): void {
    this.subscription = this._dataService.getUsers().subscribe(r => this.users = r);
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  public favorite(user: any): void {
    this.list.closeSlidingItems();
    this.presentToast('Saved in favorites');
  }

  public share(user: any): void {
    this.list.closeSlidingItems();
    this.presentToast('Sharing');
  }

  public delete(user: any): void {
    this.list.closeSlidingItems();
    this.presentToast('Erased');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
