import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'password-generator';
  password = '';

  onButtonClick() {
    this.password = 'Hello';
    console.log('Button was clicked');
  }
  //we can pass the function as well to get the value on event handler
  // getPassword() {
  //   return this.password;
  // }
}
