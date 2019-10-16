import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookComponent } from '../book/book.component';

fdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let book: Book;
  let ratingMock;

  beforeEach(() => {
    book = {
      title: '',
      isbn: '',
      description: '',
      rating: 3
    };

    ratingMock = {
      rateUp: () => book
    };
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, BookComponent ],
      providers: [
        // Abhängigkeit ersetzen: Jeder, der BookRatingService anfordert, erhält ratingMock
        { provide: BookRatingService, useValue: ratingMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service for rateUp()', () => {
    const rs = TestBed.get(BookRatingService);

    // Methode überwachen, aber Call trotzdem durchleiten
    spyOn(rs, 'rateUp').and.callThrough();

    // Methode aufrufen
    component.rateUp(book);

    expect(rs.rateUp).toHaveBeenCalled();
  });
});
