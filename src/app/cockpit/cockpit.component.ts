import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from "@angular/core";
import { ServerService } from "../server.service";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
  encapsulation: ViewEncapsulation.Emulated // default
})
export class CockpitComponent implements OnInit {
  @ViewChild("serverContentInput") serverContentInput: ElementRef;

  constructor(private serverService: ServerService) {}

  ngOnInit() {}

  onAddServer(nameIput: HTMLInputElement) {
    this.serverService.serverAdd(
      "server",
      nameIput.value,
      this.serverContentInput.nativeElement.value
    );
  }

  onAddBlueprint(nameIput: HTMLInputElement) {
    this.serverService.serverAdd(
      "blueprint",
      nameIput.value,
      this.serverContentInput.nativeElement.value
    );
  }
}
