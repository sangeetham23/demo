import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true
})
export class CustomDirective {
  @Input() name : string = "";
  constructor( private el : ElementRef) {
    
   }
  
   ngOnInit(){
    this.el.nativeElement.style.color = 'green';
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.innerText = this.name;
    console.log(this.el.nativeElement.innerText);
    
   }

}
