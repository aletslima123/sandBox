import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-conrtol',
  templateUrl: './game-conrtol.component.html',
  styleUrls: ['./game-conrtol.component.css']
})
export class GameConrtolComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval: any;
  lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval(() =>{
      this.lastNumber++;
      this.intervalFired.emit(this.lastNumber);

    },1000);
  }

  pauseGame() {
    clearInterval(this.interval);
  }

}
