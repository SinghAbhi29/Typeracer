import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-textbox",
  templateUrl: "./textbox.component.html",
  styleUrls: ["./textbox.component.css"],
})
export class TextboxComponent implements OnInit {
  beginDisplay = "Hi, Click to start!!";
  constructor() {}

  ngOnInit() {}
}
