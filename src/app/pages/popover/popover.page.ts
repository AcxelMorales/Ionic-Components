import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
})
export class PopoverPage {

  public title: string = 'Popover';

  constructor(private popoverController: PopoverController) { }

  public async showPop(event: any): Promise<void> {
    const popover = await this.popoverController.create({
      component: PopinfoComponent,
      event,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    const { data } = await popover.onDidDismiss(); // onWillDismiss
    console.log(data);
  }

}
