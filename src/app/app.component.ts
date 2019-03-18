import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'Testserver', content: 'Just a test!'},
    {type: 'blueprint', name: 'TestBlueprint', content: 'Fuck the system!'}
  ];

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

  onChange() {
    this.serverElements[0].name = 'Satanas do caralho';
  }

  onDestroy() {
    this.serverElements.splice(0, 1);
  }

  onIntervalFired(number: number){
    if(number % 2 === 0) {
      this.evenNumbers.push(number);
    } else {
      this.oddNumbers.push(number);
    }
  }
}
