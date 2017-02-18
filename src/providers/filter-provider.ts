import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FilterProvider {

  cuisines = [];
  originalCuisines = [];
  price = [];

  constructor(public http: Http) {
    this.cuisines = ['Indian', 'American', 'Chinese', 'French'];
    this.originalCuisines = ['Indian', 'American', 'Chinese', 'French'];
    this.price = [1,2,3,4];
  }

  getFilterCuisines() {
    return this.cuisines;
  }

  getFilterPrice() {
    return this.price;
  }

  updateFilterCuisines(update) {
    this.cuisines = update;
  }

  updateFilterPrice(update) {
    this.price = update;
  }

  resetFilterCuisinesToDefault() {
    this.cuisines = this.originalCuisines;
  }


}
