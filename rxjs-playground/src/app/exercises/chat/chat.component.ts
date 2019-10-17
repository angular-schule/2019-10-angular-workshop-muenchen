import { Component, OnInit } from '@angular/core';
import { Subject, merge, concat, race, forkJoin, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rxw-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {

  msg = {
    julia$: new Subject<string>(),
    georg$: new Subject<string>(),
    john$: new Subject<string>()
  };

  logStream$ = new Subject<string>();

  ngOnInit() {

    /******************************/
    /**
     * Führe die Nachrichten aller Teilnehmer in
     * einem Datenstrom zusammen. Abonniere den Datenstrom
     * und gib die Nachrichten mithilfe der Methode
     * this.log() aus.
     * - merge (Turn multiple observables into a single observable.)
     * - concat (Emit values from source 1, when complete, subscribe to source 2...)
     * - race (The observable to emit first is used.)
     * - forkJoin (When all observables complete, emit the last emitted value from each.)
     */

    function addName(name: string) {
      return map(msg => `${name}: ${msg}`);
    }

    race(
      this.msg.julia$.pipe(addName('JULIA')),
      this.msg.georg$.pipe(addName('GEORG')),
      this.msg.john$.pipe(addName('GEORG'))
    ).subscribe(
      msg => this.log(msg),
      () => {},
      () => this.log('All members left.')
    );

    // startWith selbst bauen
    function myStartWith(e: any) {
      return (source$) => {
        return concat(of(e), source$);
      };
    }
    of(1,2,3).pipe(myStartWith(0)).subscribe(console.log);


    /******************************/
  }

  private log(msg: any) {
    this.logStream$.next(msg.toString());
  }
}
