import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent {

  @Output() rated = new EventEmitter<number>();

  rates: number[] = [1,2,3,4,5];

  rate: number = 0;

  previousRate: number = 0;

  constructor() { }

  // click
  setRate(r: number) {
    this.rate = r;
    this.previousRate = undefined;
    this.rated.emit(this.rate);
  }

  // mouse enter
  setTemporaryRate(r : number) {
    if(this.previousRate === undefined) {
      this.previousRate = this.rate;
    }
    this.rate = r;
  }

  // mouse leave
  clearTemporaryRate() {
    if(this.previousRate != undefined) {
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }

}
