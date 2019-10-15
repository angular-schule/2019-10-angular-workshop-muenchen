import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private rs: BookRatingService) { }

  ngOnInit() {
    this.books = [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Grundlagen und fortgeschrittene Themen',
        rating: 5
      },
      {
        isbn: '111',
        title: 'React',
        description: 'Ein anderes Framework',
        rating: 3
      }
    ];
  }

  rateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    console.log('UP', ratedBook);
  }

  rateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    console.log('DOWN', ratedBook);
  }

}
