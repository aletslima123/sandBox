import { Component, OnInit } from "@angular/core";
import { ServerService } from "./server.service";
import { AccountService } from "./services/account.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  serverElements: { type: string; name: string; content: string }[] = [];

  accounts: {name: string, status: string}[] = [];

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor(private serverService: ServerService, private accountService: AccountService) {}

  onStatusChanged(updateInfo: { id: number; newStatus: string }) {
    this.accountService.updateStatus(updateInfo);
  }

  ngOnInit() {
    this.serverElements = this.serverService.serverElements;
    this.accounts = this.accountService.accounts;
  }

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
