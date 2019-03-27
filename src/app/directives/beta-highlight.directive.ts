import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appBetaHighlight]"
})
export class BetaHighlightDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "red"
    );
  }
}
