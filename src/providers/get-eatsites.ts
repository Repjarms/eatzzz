import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Eatsite } from '../models/eatsite';
import { Dish } from '../models/dish';

@Injectable()
export class GetEatsites {

  requestUrl = 'http://localhost:3000'; // Point to backend

  constructor(public http: Http) { }

  // Called on Eatsites page load, returns
  // array of observables for eatsites and their menus
  loadSites(): Observable<Eatsite[]> {
    return this.http.get(`${this.requestUrl}/sites`)
      .map(res => <Eatsite[]>(res.json().data));
  }

  loadMenu(): Observable<Dish[]> {
    return this.http.get(`${this.requestUrl}/menu`)
      .map(res => <Dish[]>(res.json().data));
  }

}
