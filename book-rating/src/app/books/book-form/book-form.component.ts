import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Book } from '../shared/book';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;

  @Output() submitBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      price: new FormControl('', [
        Validators.required,
        Validators.min(1)
      ]),
      authors: new FormArray([
        new FormControl(''),
        new FormControl('')
      ])
    });
  }

  isInvalid(name: string) {
    const control = this.bookForm.get(name);
    return control.invalid && control.touched;
  }

  hasError(name: string, errorCode: string) {
    const control = this.bookForm.get(name);
    return control.hasError(errorCode) && control.touched;
  }

  get authors() {
    return this.bookForm.get('authors') as FormArray;
  }

  addAuthor() {
    this.authors.push(new FormControl(''));
  }

  removeAuthor(index: number) {
    this.authors.removeAt(index);
  }

  submitForm() {

    this.submitBook.emit();
  }

}
