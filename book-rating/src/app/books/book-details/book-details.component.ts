import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
    // const isbn = this.route.snapshot.paramMap.get('isbn');
    // console.log(isbn);

    // TODO: Doppelte Subscription vermeiden
    /*this.route.paramMap.subscribe(params => {
      const isbn = params.get('isbn');
      this.bs.getSingle(isbn).subscribe(book => this.book = book);
    });*/

    this.book$ = this.route.paramMap.pipe(
      map(params => params.get('isbn')),
      switchMap(isbn => this.bs.getSingle(isbn))
    );
  }

}
