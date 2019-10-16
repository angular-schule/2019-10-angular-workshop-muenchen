import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { Book } from '../shared/book';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  let book: Book;

  beforeEach(() => {
    book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3
    };
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    // Wichtig: Daten setzen VOR detectChanges()
    component.book = book;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event for method call', () => {
    let emittedBook: Book;

    // Event abonnieren
    component.rateUp.subscribe(b => {
      emittedBook = b;
    });

    // Methode aufrufen
    component.doRateUp();

    // Prüfen, ob Event ausgelöst
    expect(emittedBook).toBe(component.book);
  });


  it('should call method for btn click', () => {
    // Button holen
    const rateUpBtn: HTMLButtonElement = fixture.nativeElement
      .querySelector('[data-testid="rateUpBtn"]');

    // Spion überwacht Methode
    spyOn(component, 'doRateUp');

    // Button klicken
    rateUpBtn.click();

    // Prüfen, ob Methode aufgerufen
    expect(component.doRateUp).toHaveBeenCalled();
  });
});
