import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../service/api.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  apiData : any;
  countryName = "";

  https = inject(HttpClient);

  constructor(private fb: FormBuilder,private http : ApiService){
    this.https.get("https://jsonplaceholder.typicode.com/users").subscribe((res)=>{
      console.log(res);
    })
  }


  search(countryName:string){
    this.http.countryData(countryName).subscribe(data  => {
      console.log(data);
      this.apiData = data;
    });
    
  }
  getCurrencyInfo(currencies: any): string {
    // console.log(currencies);
    const currencyName = Object.keys(currencies)[0];
    const currencyInfo = currencies[currencyName];
    return `${currencyName} (${currencyInfo.name}) , ${currencyInfo.symbol}`;
  }

  reset(){
    let countryname = document.getElementById('country') as HTMLInputElement;
    countryname.value = "";
    this.apiData = null;
  }

  //Post Method

  employeeForm!: FormGroup ;


  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      salary: ['', [Validators.required]],
      age: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.http.createUser(this.employeeForm.value).subscribe(
        (response) => {
          console.log('Employee created successfully:', response);
          alert("Employee created successfully!!!");
        },
        (error) => {
          console.error('Error creating employee:', error);
          alert("Error creating employee");
        }
      );
    } else {
      alert("Please fill out all fields correctly.");
    }
  }

  resetForm() : void{
    this.employeeForm.reset();
  }

  // Patch Method

  // {
  //   "id": 7,
  //   "email": "michael.lawson@reqres.in",
  //   "first_name": "Michael",
  //   "last_name": "Lawson",
  //   "avatar": "https://reqres.in/img/faces/7-image.jpg"
  // },

  updateUser(id:number){
    const data = {                 
      name : "John",                
      age : 30
    }                           
     
    this.http.updateuser(id,data).subscribe(
      (response) => {
        console.log(response);
        alert("User updated successfully!!")
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

  //Delete User

  deleteUser(id:number){
    this.http.deleteUser(id).subscribe(
      (response) => {
        console.log(response);
        alert(response.message);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}

