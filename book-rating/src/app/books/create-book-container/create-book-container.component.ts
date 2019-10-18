import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { createBook } from '../actions/book.actions';

@Component({
  selector: 'br-create-book-container',
  templateUrl: './create-book-container.component.html',
  styleUrls: ['./create-book-container.component.scss']
})
export class CreateBookContainerComponent implements OnInit {

  constructor(
    private bs: BookStoreService,
    private router: Router,
    private store: Store<State>) { }

  ngOnInit() {
  }

  createBook(book: Book) {
    /*this.bs.create(book).subscribe(() => {
      this.router.navigate(['/books', book.isbn]);
    });*/

    this.store.dispatch(createBook({ data: book }))
  }

}
