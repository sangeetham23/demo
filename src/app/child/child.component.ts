import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() userName : string[] = [];
  @Output() notify:EventEmitter<string> = new EventEmitter<string>();

  emit(data:string){
    this.notify.emit(data);
  }
}
