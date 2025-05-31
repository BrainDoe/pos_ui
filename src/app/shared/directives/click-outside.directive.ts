import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Input() excludeTargets: HTMLElement[] = [];
  @Output() appClickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    const clickedExcluded = this.excludeTargets.some((el) =>
      el.contains(event.target as Node)
    );

    if (!clickedInside && !clickedExcluded) {
      this.appClickOutside.emit();
    }
  }
}
