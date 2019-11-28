import { Component, OnInit } from '@angular/core';
import { words } from './words';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {

  word = '';
  hiddenWord = '';
  guesses = 0;
  won = false;
  lost = false;
  letters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];

  constructor() {
    const randomNumber = Math.floor(Math.random() * words.length);
    this.word = words[randomNumber];
    this.hiddenWord = '_  '.repeat(this.word.length);
  }

  checkWord() {
    const wordArray = this.hiddenWord.split(' ');
    const wordCheck = wordArray.join('');
    if (wordCheck === this.word) {
        this.won = true;
    }
    if (this.guesses >= 10) {
        this.lost = true;
    }
}

check(letter: string) {
  if ((document.getElementById('btn-' + letter) as HTMLInputElement) === null) {
      return true;
  }
  if ((document.getElementById('btn-' + letter) as HTMLInputElement).disabled === true) {
      return true;
  }
  (document.getElementById('btn-' + letter) as HTMLInputElement).disabled = true;
  if (this.word.indexOf(letter) === -1) {
      this.guesses++;
  }
  const hiddenWordArray = this.hiddenWord.split(' ');
  for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === letter) {
          hiddenWordArray[i] = letter;
      }
  }
  this.hiddenWord = hiddenWordArray.join(' ');
  this.checkWord();
}

onKey(event: KeyboardEvent) {
  this.check(event.key.toUpperCase());
}

  ngOnInit() {
  }

}
