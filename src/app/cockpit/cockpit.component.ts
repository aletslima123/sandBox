import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated // default
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('serverContentInput') serverContentInput: ElementRef;


  constructor() { }

  ngOnInit() {

  }

  onAddServer(nameIput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameIput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameIput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameIput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
