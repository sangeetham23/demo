import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  providers : [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  data : any
  constructor(private apiService : ApiService){}

  ngOnInit(){
    this.apiService.getAllData().subscribe(
      (result) => {
        this.data = result;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    this.apiService.getAllData().subscribe((data)=>{
      console.log(data);
      // run expressApp to fetch data from database
    })
  }
}
