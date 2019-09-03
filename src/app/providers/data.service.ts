import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { IComponent } from '../interfaces/IComponent';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  url: string = 'https://reqres.in/api/users?per_page=12';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Object[]> {
    return this.http.get<Object[]>(this.url).pipe(
      map((resp: any) => resp.data)
    );
  }

  getMenu(): Observable<IComponent[]> {
    return this.http.get<IComponent[]>('/assets/data/menu.json');
  }

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getSuperHeroes(): Observable<any[]> {
    return this.http.get<any[]>('/assets/data/superheroes.json').pipe(
      delay(1000)
    );
  }
  
}
