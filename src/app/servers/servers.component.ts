import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    alert("Conteúdo localizado na controller do componente (dá uma olhada), servers.component.ts");
    // this.router.navigate(['servers'], {relativeTo: this.route }); Não funciona propositalmente,
    //                                                                apenas um exemplo de caminho relativo utilizando
    //                                                                  navigate.
  }

}
