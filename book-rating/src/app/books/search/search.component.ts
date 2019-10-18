import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  results$: Observable<Book[]>;

  isLoading = false;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      term: new FormControl('')
    });

    this.results$ = this.searchForm.get('term').valueChanges.pipe(
      filter(term => term.length >= 3 || term.length === 0),
      debounceTime(1000),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(term => this.bs.search(term)),
      tap(() => this.isLoading = false),
    );

    /*
    - Suchbegriff mindestens 3 Zeichen
    - Datenstrom "bremsen" (nicht zu viele Suchbegriffe durchlassen)
    - keine zwei gleichen Begriffe nacheinander
    - für jeden Suchbegriff HTTP-Request machen (BookStoreService.search(term))
      - injecten und nutzen
    - Ergebnisse anzeigen
      - ul/li, Titel anzeigen
      - Extra: Verlinkung zur Detailseite
    - AsyncPipe
    - Extra: Ladeanzeige
    */
  }

}
