import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs';
import { map, filter, take, switchMap, scan, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  form! : FormGroup;

  constructor(private fb : FormBuilder){
    this.form = this.fb.group({
      name : ['', [Validators.required, Validators.pattern("[a-zA-z]+")]],
      password : ['',[Validators.required, Validators.pattern("[A-Z][a-z]+[0-9]+")]],
      accNum : ['',[Validators.required, Validators.pattern("[0-9]{11}")]],
      email : ['',[Validators.required, Validators.pattern("[a-zA-Z0-9\-\._]+@[a-z]+[\.][a-z]{2,3}")]],
      phoneNum : ['',[Validators.required, Validators.pattern("[0-9]{10}")]],
      address : ['',[Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
      dob : ['',[Validators.required, Validators.pattern("[0-9]{2}/[0-9]{2}/[0-9]{4}")]],
    });

    const source$ = of(1, 2, 3, 4, 5,6);

    source$.pipe(
      filter(num => num % 2 === 0), 
      map(num => num * 2), 
      switchMap(num => of(num + 10)),
      take(2)
    ).subscribe(result => console.log(result)); 

    source$.pipe(
      scan((acc, val)=>{
        return acc+val;
      })
    ).subscribe(result => console.log(result));


  }  

  getErrorMessage(controlName: string) {
    const control = this.form.get(controlName);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    if (control?.hasError('pattern')) {
      return 'Invalid input';
    }
    return '';
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted successfully!');
      console.log(this.form.value);
      
    }
  }
}
