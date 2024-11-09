import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddPipe, CustomPipe } from './custom.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, CommonModule, CustomPipe, HttpClientModule, AddPipe],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private http : HttpClient){}

  date = new Date();
  name = "Sangeetha murugasamy";
  amount = 123.6789;
  num = 12345.45677;
  per = 55;

  arr = [1,2,3,4]
  obj = {name: 'sangeetha', age: 24};
  data:any;

  // ngOnInit(){
  //   this.http.get('https://restcountries.com/v3.1/all').subscribe((response: any) => {
  //   // Assign the response data to the data property
  //   this.data = response;
  //   });
  // }
}
