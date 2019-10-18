import { createFeatureSelector, createSelector } from "@ngrx/store";
import { bookFeatureKey, State } from '../reducers/book.reducer';

export const getBookState = createFeatureSelector<State>(bookFeatureKey);

export const getAllBooks = createSelector(
  getBookState,
  state => state.books
);

export const getBooksLoading = createSelector(
  getBookState,
  state => state.loading
);

