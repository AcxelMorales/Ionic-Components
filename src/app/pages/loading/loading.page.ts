import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
})
export class LoadingPage implements OnInit {

  public title: string = 'loading';
  private loading: any;

  constructor(public loadingController: LoadingController) { }

  ngOnInit(): void {
    this.presentLoading('Loading...');

    setTimeout(() => {
      this.loading.dismiss();
    }, 2500);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingController.create({
      message
      // duration: 2000
    });
    await this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

}
