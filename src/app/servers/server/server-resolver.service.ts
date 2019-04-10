import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { ServersService } from "../servers.service";

interface IServer {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver implements Resolve<IServer> {
  constructor(private serversService: ServersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IServer> | Promise<IServer> | IServer {
    return this.serversService.getServer(+route.params["id"]);
  }
}
