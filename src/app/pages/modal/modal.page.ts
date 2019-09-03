import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
})
export class ModalPage {

  public title: string = 'Modal';

  constructor(private modalController: ModalController) { }

  public async onOpen(): Promise<void> {
    const modal = await this.modalController.create({
      component     : ModalInfoPage,
      componentProps: {
        nombre: 'Acxel',
        pais  : 'México'
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log(data);
  }

}
