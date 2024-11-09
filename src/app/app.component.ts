import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { EnrollService } from '../services/enroll.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularComponent, JavascriptComponent, HttpClientModule],
  providers : [EnrollService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'services';
  number : number = 0;
  apiData : any;

  constructor(private apiService : EnrollService){}

  onSubmit(name : string,age : string){
    alert(`Name : ${name}, Age : ${age}`);
  }

  count(){
    this.number = this.number + 1;
  }

  ngOnInit(){
    this.apiService.getInfo().subscribe(data =>{
      this.apiData = data;   
    });
  }
}
