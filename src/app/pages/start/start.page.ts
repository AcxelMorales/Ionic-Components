import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { Observable } from 'rxjs';

import { IComponent } from '../../interfaces/IComponent';
import { DataService } from '../../providers/data.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
})
export class StartPage implements OnInit {

  components: Observable<IComponent[]>;

  constructor(
    private menuController: MenuController,
    public dataService    : DataService
  ) { }

  ngOnInit(): void {
    this.components = this.dataService.getMenu();
  }

  public toggleMenu(): void {
    this.menuController.toggle();
  }

}