import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { scan, startWith, shareReplay } from 'rxjs/operators';

interface MyState {
  counter: number;
  name: string;
  year: number;
}


@Injectable({
  providedIn: 'root'
})
export class StateService {

  input$ = new Subject<string>();
  state$: Observable<MyState>;

  initialState: MyState = {
    counter: 0,
    name: 'Angular',
    year: 2016
  };

  constructor() {
    this.state$ = this.input$.pipe(
      startWith('INIT'),
      scan(this.reducer, this.initialState),
      shareReplay(1)
    );

    this.state$.subscribe(console.log);
  }

  private reducer(state: MyState, message: string): MyState {
    switch (message) {
      case 'INCREMENT': return {
        ...state,
        counter: state.counter + 1
      };

      case 'DECREMENT': return {
        ...state,
        counter: state.counter - 1
      };

      case 'RESET': return {
        ...state,
        counter: 0
      };

      case 'INC10': return {
        ...state,
        counter: state.counter + 10
      };

      default: return state;
    }
  }
}
