import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CustomDirective } from './custom.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, CustomDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  show : boolean = true;
  num = 2;

  items  = [
    {
    name : "Leo",
    age : 1
    },
    {
      name : "Dora",
      age : 3
    },
    {
      name : "Saara",
      age : 0.5
    }
];
  highlightColor: string = 'white';
  isStyleApplied : boolean = false;

  hightlight(color:string){
    this.highlightColor = color;
  }

  toggleStyle(){
    this.isStyleApplied = !this.isStyleApplied;
  }
}
