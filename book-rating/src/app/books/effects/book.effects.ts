import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as BookActions from '../actions/book.actions';
import { BookStoreService } from '../shared/book-store.service';
import { Router } from '@angular/router';



@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType(BookActions.loadBooks),
    concatMap(() =>
      this.bs.getAll().pipe(
        map(data => BookActions.loadBooksSuccess({ data })),
        catchError(error => of(BookActions.loadBooksFailure({ error }))))
    )
  ));

  createBooks$ = createEffect(() => this.actions$.pipe(
    ofType(BookActions.createBook),
    concatMap(action => this.bs.create(action.data).pipe(
      map(() => BookActions.createBookSuccess())
    ))
  ));

  createBookSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(BookActions.createBookSuccess),
    tap(() => this.router.navigateByUrl('/books'))
  ), { dispatch: false }); // Effect soll nicht dispatchen

  constructor(
    private actions$: Actions,
    private bs: BookStoreService,
    private router: Router) {}

}
