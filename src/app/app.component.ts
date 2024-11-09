import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, LifeCycleComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  showOrHide: boolean = false;

  value: string = "";

  enableBtn(){
    this.showOrHide = !this.showOrHide;
  }
}
