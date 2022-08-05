import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  password = '';
  includeLettes = false;
  includeNumbers = false;
  includeSymbols = false;

  //define the methods to handle events on DOM
  // handle the input text
  onChangeLength(value: string) {
    //convert number into string
    const parsedValue = parseInt(value);
    //check the condition or validation to see it's number or not
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
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
    //process to create a random password
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#£$%^&*()?';

    let validCharacter = '';
    if (this.includeLettes) {
      validCharacter += letters;
    }

    if (this.includeNumbers) {
      validCharacter += numbers;
    }

    if (this.includeSymbols) {
      validCharacter += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validCharacter.length);
      generatedPassword += validCharacter[index];
    }
    this.password = generatedPassword;
  }
}
