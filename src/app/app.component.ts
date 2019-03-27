import { Component, OnInit } from "@angular/core";
import { ServerService } from "./server.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [ServerService]
})
export class AppComponent implements OnInit {
  serverElements: { type: string; name: string; content: string }[] = [];

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverElements = this.serverService.serverElements;
  }

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onChange() {
    this.serverElements[0].name = "Satanas do caralho";
  }

  onDestroy() {
    this.serverElements.splice(0, 1);
  }

  onIntervalFired(number: number) {
    if (number % 2 === 0) {
      this.evenNumbers.push(number);
    } else {
      this.oddNumbers.push(number);
    }
  }
}
