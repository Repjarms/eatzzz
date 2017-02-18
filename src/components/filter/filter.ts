import { Component, Output, EventEmitter } from '@angular/core';

import { FilterProvider } from '../../providers/filter-provider';

@Component({
  selector: 'filter-component',
  templateUrl: 'filter.html'
})
export class FilterComponent {

  cuisines = [];
  price = [];
  @Output() cuisineFilterUpdate: EventEmitter<any> = new EventEmitter();
  @Output() priceFilterUpdate: EventEmitter<any> = new EventEmitter();

  constructor(private filterProvider: FilterProvider) {
    this.cuisines = filterProvider.getFilterCuisines();
    this.price = filterProvider.getFilterPrice();
  }

  updateCuisines() {
    this.filterProvider.updateFilterCuisines(this.cuisines);
    this.cuisineFilterUpdate.emit(this.cuisines);
  }

  updatePrice() {
    this.filterProvider.updateFilterPrice(this.price);
    this.priceFilterUpdate.emit(this.price);
  }

  onCancel() {
    console.log('Cancelled');
  }

}
