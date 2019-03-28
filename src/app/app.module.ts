import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { CockpitComponent } from "./cockpit/cockpit.component";
import { ServerElementComponent } from "./server-element/server-element.component";
import { GameConrtolComponent } from "./game-conrtol/game-conrtol.component";
import { OddComponent } from "./odd/odd.component";
import { EvenComponent } from "./even/even.component";
import { AccountComponent } from "./account/account.component";
import { NewAccountComponent } from "./new-account/new-account.component";
import { BetaHighlightDirective } from "./directives/beta-highlight.directive";
import { ServerService } from "./server.service";

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    GameConrtolComponent,
    OddComponent,
    EvenComponent,
    AccountComponent,
    NewAccountComponent,
    BetaHighlightDirective
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
