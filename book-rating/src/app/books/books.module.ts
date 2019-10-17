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

@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookDetailsComponent,
    CreateBookContainerComponent,
    BookFormComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
