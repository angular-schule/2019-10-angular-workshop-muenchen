import { Component, OnInit } from '@angular/core';
import { StateService } from '../shared/state.service';
import { map } from 'rxjs/operators';

export const getCounter = state => state.counter;

@Component({
  selector: 'br-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter$ = this.stateService.state$.pipe(
    map(getCounter)
  );

  constructor(private stateService: StateService) { }

  ngOnInit() {
  }

  increment() {
    this.stateService.input$.next('INCREMENT');
  }

  decrement() {
    this.stateService.input$.next('DECREMENT');
  }

  reset() {
    this.stateService.input$.next('RESET');
  }

  incrementByTen() {
    this.stateService.input$.next('INC10');
  }

}
