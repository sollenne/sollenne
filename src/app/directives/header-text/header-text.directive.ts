import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import * as _ from 'lodash';

@Directive({
  selector: '[appHeaderText]'
})

export class HeaderTextDirective implements OnInit {
  @Input() text: string;
  @Input() capitalize: boolean;

  private headerElement: HTMLElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {

    this.headerElement = this.el.nativeElement;

    this.setStyles(_.toLower(this.headerElement.tagName));
  }

  private setStyles = (elementName: string): void => {
    let fontSize: string = '1rem';

    switch(elementName) {
      case 'h1':
        fontSize = '2.25rem';
        break;
      case 'h2':
        fontSize = '2rem';
        break;
      case 'h3':
        fontSize = '2rem';
        break;
      case 'h4':
        fontSize = '2rem';
        break;
      case 'h5':
        fontSize = '2rem';
        break;
      case 'h6':
        fontSize = '2rem';
        break;
      default:
        fontSize = '1rem';
    }

    this.renderer.setStyle(this.headerElement, 'font-size', fontSize);
    this.renderer.setStyle(this.headerElement, 'text-align', 'center');
    this.renderer.setStyle(this.headerElement, 'color', 'rgb(32, 81, 91)');
    this.renderer.setStyle(this.headerElement, 'margin-top', '50px');
    this.renderer.setStyle(this.headerElement, 'margin-bottom', '15px');
    this.renderer.setStyle(this.headerElement, 'font-weight', '700');
    this.renderer.setStyle(this.headerElement, 'line-height', '1.1');

    if (this.capitalize) {
      this.headerElement.innerText = this.text.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    } else {
      this.headerElement.innerText = this.text;
    }
  };

}
