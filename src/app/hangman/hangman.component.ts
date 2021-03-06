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
  tries = 0;
  win = false;
  lost = false;
  letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  constructor() {}

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let randomNumber = Math.floor(Math.random() * words.length);
    this.word = words[randomNumber];
    this.hiddenWord = '_ '.repeat(this.word.length);
  }

  check(letter: string) {
    if (
      (document.getElementById('btn-' + letter) as HTMLInputElement) === null
    ) {
      return true;
    }
    if (
      (document.getElementById('btn-' + letter) as HTMLInputElement)
        .disabled === true
    ) {
      return true;
    }
    (document.getElementById(
      'btn-' + letter
    ) as HTMLInputElement).disabled = true;
    if (this.word.indexOf(letter) === -1) {
      this.tries++;
    }
    const hiddenWordArray = this.hiddenWord.split(' ');
    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }
    this.hiddenWord = hiddenWordArray.join(' ');
    this.checkGame();
  }

  checkGame() {
    const wordArray = this.hiddenWord.split(' ');
    const wordCheck = wordArray.join('');
    if (wordCheck === this.word) {
      this.win = true;
    }
    if (this.tries >= 10) {
      this.lost = true;
    }
  }

  reload() {
    location.reload();
  }

  onKey(event: KeyboardEvent) {
    this.check(event.key.toUpperCase());
  }

  playYouWinSound() {
    const audio = new Audio();
    audio.src = '../../assets/sounds/winner.mp3';
    audio.load();
    audio.play();
  }

  playYouLoseSound() {
    let audio = new Audio();
    audio.src = '../../assets/sounds/youlose.mp3';
    audio.load();
    audio.play();
  }
}
