import { Component } from '@angular/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  d = new Date();
  title = 'Book Rating';

  /*constructor() {
    setTimeout(() => this.title = 'FOOO', 2000);
  }*/
}
