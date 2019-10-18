import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private apiUrl = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Book[]>(`${this.apiUrl}/books`).pipe(
      catchError(err => {
        return of([
          {
            title: 'Fehlerbuch!',
            isbn: '000',
            description: 'Es ist ein Fehler aufgetreten.',
            authors: [],
            price: 100,
            rating: 1
          }
        ]);
      })
    );
  }

  getSingle(isbn: string) {
    return this.http.get<Book>(`${this.apiUrl}/books/${isbn}`);
  }

  create(book: Book) {
    return this.http.post(
      `${this.apiUrl}/books`,
      book,
      { responseType: 'text' }
    );
  }

  search(term: string) {
    return this.http.get<Book[]>(`${this.apiUrl}/books/search/${term}`).pipe(
      catchError(err => of([]))
    );
  }

}
