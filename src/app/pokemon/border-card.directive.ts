import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})

export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;
  private defaultCursor: string = 'auto';


  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorderColor(this.initialColor);
    this.setCursor(this.defaultCursor);
  }

  
  @Input('pokemonBorderCard') borderColor: string;


  // event listener for mouseenter event
  @HostListener('mouseenter') onMouseEnter(){
    this.setBorderColor(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorderColor(this.initialColor);
  }

  @HostListener('mouseover') onMouseOver(){
    this.setCursor('pointer');
  }


  // method to set height and color of the card
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorderColor(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

  setCursor(cursor: string) {
    this.el.nativeElement.style.cursor = `${cursor}`;
  }

}
