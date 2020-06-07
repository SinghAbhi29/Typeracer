import { Component, OnInit } from "@angular/core";
import { $ } from "protractor";

@Component({
  selector: "app-textbox",
  templateUrl: "./textbox.component.html",
  styleUrls: ["./textbox.component.css"],
})
export class TextboxComponent implements OnInit {
  beginDisplay = "Good Luck!!";
  wordList: string[] = [
    "Apple",
    "Orange",
    "Banana",
    "Papaya",
    "Fig",
    "A",
    "B",
    "C",
    "D",
    "E",
  ];
  textValue: string = "";
  show: boolean = true;
  wordShow: boolean = false;
  word: string;
  count = 0;
  timeLeft: number = 30;
  interval;
  constructor() {}
  ngOnInit() {}
  initialize() {
    this.count = 0;
    this.timeLeft = 30;
    this.show = true;
    this.wordShow = true;
    clearInterval(this.interval);
    this.startTimer();
  }
  getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  sendMessage() {
    if (this.textValue == "Go") this.initialize();
    if (this.word == this.textValue) {
      this.count = this.count + 1;
      this.timeLeft = this.timeLeft + 2;
    }
    this.word = this.wordList[this.getRandomNumberBetween(0, 9)];
    this.textValue = "";
  }
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.show = false;
        this.wordShow = false;
      }
    }, 1000);
  }
}
