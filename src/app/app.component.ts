import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'password-generator';
  password = '';
  includeLettes = false;
  includeNumbers = false;
  includeSymbols = false;

  //define the methods to handle events on DOM
  onChangeUseLetters() {
    this.includeLettes = !this.includeLettes;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    console.log(`About to generate a password with the following:
    Include Letters : ${this.includeLettes}
    Include Numbers : ${this.includeNumbers}
    Include Symbols : ${this.includeSymbols}
    `);
    this.password = 'Hello';
  }

  //we can pass the function as well to get the value on event handler
  // getPassword() {
  //   return this.password;
  // }

  //use string interplotion for a method as well
  // getName() {
  //   return 'Vrunda';
  // }
}
