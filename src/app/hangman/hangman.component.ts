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


  constructor() { }

  ngOnInit() {
  }

}
