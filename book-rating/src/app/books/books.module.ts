import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CreateBookContainerComponent } from './create-book-container/create-book-container.component';
import { BookFormComponent } from './book-form/book-form.component';
import { SearchComponent } from './search/search.component';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './reducers/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './effects/book.effects';

@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookDetailsComponent,
    CreateBookContainerComponent,
    BookFormComponent,
    SearchComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducer),
    EffectsModule.forFeature([BookEffects])
  ]
})
export class BooksModule { }
