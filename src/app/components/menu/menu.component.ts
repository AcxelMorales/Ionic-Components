import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { DataService } from '../../providers/data.service';
import { IComponent } from '../../interfaces/IComponent';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  components: Observable<IComponent[]>;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.components = this.dataService.getMenu();
  }

}
