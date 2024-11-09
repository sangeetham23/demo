import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle-child',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-child.component.html',
  styleUrl: './life-cycle-child.component.scss'
})
export class LifeCycleChildComponent {
  
  @Input() value : string | undefined;

  constructor() {
    console.log("Child Contrunctor");
  }
  
  ngOnChanges() {
    console.log("Child ngOnChanges");
  }
  
  ngOnInit() {
    console.log("Child ngOnInit");
  }
  
  ngDoCheck() {
    console.log("Child ngDoCheck");
  }
  
  ngAfterContentInit() {
    console.log("Child ngAfterContentInit");
  }
  
  ngAfterContentChecked() {
    console.log("Child ngAfterContentChecked");
  }
  
  ngAfterViewInit() {
    console.log("Child ngAfterViewInit");
  }
  
  ngAfterViewChecked() {
    console.log("Child ngAfterViewChecked");
  }
  
  ngOnDestroy() {
    console.log("Child ngOnDestroy");
  }
}
