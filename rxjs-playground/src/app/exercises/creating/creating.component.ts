import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval } from 'rxjs';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent implements OnInit {

  myObservable$: Observable<any>;

  ngOnInit() {
    /**
     * Erstelle ein Observable und schreibe es in this.myObservable$
     */

    this.myObservable$ = new Observable(obs => {
      obs.next('Hallo');

      setTimeout(() => obs.next('Welt'), 1000);
      setTimeout(() => obs.next('...'), 2000);
    });


    this.myObservable$ = of(1,2,3,4);
    this.myObservable$ = from([4,5,6,7]);
    this.myObservable$ = timer(2000);
    this.myObservable$ = interval(2000);


    /*function producer(obs) {
      obs.next(1);
      setTimeout(() => obs.next(2), 2000);
      setTimeout(() => obs.complete(), 3000);
    }

    const myObs$ = new Observable(producer);

    const myObserver = {
      next: e => console.log(e),
      error: e => console.error(e),
      complete: () => console.log('ENDE')
    };

    const myObserver2 = {
      next: e => console.log('MUC', e),
      error: e => console.error('BY', e),
      complete: () => console.log('FOO')
    };*/

    // producer(myObserver);
    // producer(myObserver2);

    /*
    const myObs$ = new Observable(producer);
    myObs$.subscribe(myObserver);
    */


  }

}
