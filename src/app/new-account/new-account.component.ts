import { Component } from "@angular/core";
import { AccountService } from "../services/account.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"]
})
export class NewAccountComponent {
  constructor(
    private accountService: AccountService,
    loggingService: LoggingService
  ) {
    this.accountService.statusUpdated.subscribe((status: string) =>
      alert("New status " + status)
    );
  }

  onAccountAdded(name: string, status: string) {
    this.accountService.addAccount(name, status);
  }
}
