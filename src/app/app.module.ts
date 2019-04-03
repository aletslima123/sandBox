import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material";
import { Routes, RouterModule } from "@angular/router";

// Services

import { ServerService } from "./server.service";
import { LoggingService } from "./logging.service";
import { AccountService } from "./services/account.service";
import { TableService } from "./services/table.service";

// Components

import { AppComponent } from "./app.component";
import { CockpitComponent } from "./cockpit/cockpit.component";
import { ServerElementComponent } from "./server-element/server-element.component";
import { GameConrtolComponent } from "./game-conrtol/game-conrtol.component";
import { OddComponent } from "./odd/odd.component";
import { EvenComponent } from "./even/even.component";
import { AccountComponent } from "./account/account.component";
import { NewAccountComponent } from "./new-account/new-account.component";
import { BetaHighlightDirective } from "./directives/beta-highlight.directive";
import { DynamicTableComponent } from "./dynamic-table/dynamic-table.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersService } from "./servers/servers.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "users", component: UsersComponent },
  { path: "users/:id", component: UserComponent },
  { path: "servers", component: ServersComponent }
];

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
    BetaHighlightDirective,
    DynamicTableComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [
    ServerService,
    LoggingService,
    AccountService,
    TableService,
    ServersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
