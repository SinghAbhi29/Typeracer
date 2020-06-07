import { Component, OnInit } from "@angular/core";
import { $ } from "protractor";
import { ApicallService } from "../apicall.service";
@Component({
  selector: "app-textbox",
  templateUrl: "./textbox.component.html",
  styleUrls: ["./textbox.component.css"],
})
export class TextboxComponent implements OnInit {
  beginDisplay = "Good Luck!!";
  textValue: string = "";
  show: boolean = true;
  wordShow: boolean = false;
  word: string;
  count = 0;
  timeLeft: number = 30;
  interval;
  words;
  constructor(private apiservice: ApicallService) {}
  ngOnInit() {
    this.apiservice.getWords().subscribe((data) => {
      this.words = data;
      console.log(this.words);
    });
  }
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
    if (this.word == this.textValue && this.timeLeft > 0) {
      this.count = this.count + 1;
      this.timeLeft = this.timeLeft + 2;
    }
    this.word = this.words[this.getRandomNumberBetween(0, 149)];
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
