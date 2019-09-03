import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
})
export class ModalInfoPage {

  @Input() nombre: string;
  @Input() pais  : string;

  constructor(private modalController: ModalController) { }

  public leaveWithoutArguments(): void {
    this.modalController.dismiss();
  }

  public leaveWithArguments(): void {
    this.modalController.dismiss({
      nombre: 'Juan',
      pais  : 'España'
    });
  }

}
