import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  possibleColorList = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ];

  @HostBinding('style.background-color') bgColor!: string;
  @HostBinding('style.border-color') borderColor!: string;

  @HostListener('click') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColorList.length);

    this.borderColor = this.possibleColorList[colorPick*2];
    this.bgColor = this.possibleColorList[colorPick];
  }

}