import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LifeCycleChildComponent } from '../life-cycle-child/life-cycle-child.component';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [CommonModule, FormsModule, LifeCycleChildComponent],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent {

  @Input() value : string | undefined;

  constructor() {
    console.log("Parent Contrunctor");
  }
  
  ngOnChanges() {
    console.log("Parent ngOnChanges");
  }
  
  ngOnInit() {
    console.log("Parent ngOnInit");
  }
  
  ngDoCheck() {
    console.log("Parent ngDoCheck");
  }
  
  ngAfterContentInit() {
    console.log("Parent ngAfterContentInit");
  }
  
  ngAfterContentChecked() {
    console.log("Parent ngAfterContentChecked");
  }
  
  ngAfterViewInit() {
    console.log("Parent ngAfterViewInit");
  }
  
  ngAfterViewChecked() {
    console.log("Parent ngAfterViewChecked");
  }
  
  ngOnDestroy() {
    console.log("Parent ngOnDestroy");
  }
  
}
