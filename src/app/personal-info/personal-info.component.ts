import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router : Router, private service : RegisterService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      fname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      lname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      dob: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
    });
    
   this.service.personalInformation$.subscribe(data => {
      if (data) {
        this.form.patchValue(data);
      }
    });
  }

  // onSubmit(): void {
  //   if (this.form.valid) {
  //     console.log('Form submitted successfully:', this.form.value);
  //     alert("Registered successfully!!!");
  //     this.resetForm();
  //   } else {
  //     console.error('Form submission failed. Please fill out all fields correctly.');
  //   }
  // }

  onNext(){
    this.service.updatePersonalInformation(this.form.value);
    this.router.navigate(['/contact-info']);
  }

  resetForm(): void {
    this.form.reset();
  }
}
