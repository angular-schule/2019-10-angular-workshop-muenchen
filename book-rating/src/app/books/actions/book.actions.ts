import { createAction, props } from '@ngrx/store';
import { Book } from '../shared/book';

export const loadBooks = createAction(
  '[Book] Load Books'
);

export const loadBooksSuccess = createAction(
  '[Book] Load Books Success',
  props<{ data: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Book] Load Books Failure',
  props<{ error: any }>()
);

export const createBook = createAction(
  '[Book] Create Book',
  props<{ data: Book }>()
);

export const createBookSuccess = createAction(
  '[Book] Create Book Success'
);
