import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bmoat';
  body;

  constructor() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(body => body.json())
      .then(res => this.body = res);
  }
}
