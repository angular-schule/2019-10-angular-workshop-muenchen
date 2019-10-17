import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  myObj = {
    title: 'foo',
    isbn: '123'
  };

  @Output() submitBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  submitForm() {

    this.submitBook.emit();
  }

}
