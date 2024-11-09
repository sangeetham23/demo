import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CustomDirective } from './custom.directive';
=======
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
>>>>>>> f7303095708e5b288179e255eca38f08778b9386

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, FormsModule, CommonModule, CustomDirective],
=======
  imports: [RouterOutlet, CommonModule, ParentComponent],
>>>>>>> f7303095708e5b288179e255eca38f08778b9386
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
<<<<<<< HEAD
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
=======
  title = 'data-binding';
>>>>>>> f7303095708e5b288179e255eca38f08778b9386
}
