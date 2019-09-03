import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
})
export class InputPage {

  public title: string = 'input';
  nombre: string;
  
  usuario: IUsuario = {
    email   : '',
    password: ''
  }

  constructor() { }

  public submit(): void {
    console.log('Usuario', this.usuario);
  }

}

export default interface IUsuario {
  email   : string;
  password: string;
}
