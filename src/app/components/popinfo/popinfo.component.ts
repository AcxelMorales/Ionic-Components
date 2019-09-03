import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
})
export class PopinfoComponent {

  items = new Array(20);

  constructor(private popoverController: PopoverController) { }

  public onClose(): void {
    this.popoverController.dismiss();
  }

  public onItem(value: any): void {
    this.popoverController.dismiss({
      item: value
    });
  }

}
