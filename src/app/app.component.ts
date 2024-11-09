import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      age: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      city: ['', Validators.required],
      agree: [false, Validators.requiredTrue],
      gender: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted successfully:', this.form.value);
      alert("Registered successfully!!!");
      this.resetForm();
    } else {
      console.error('Form submission failed. Please fill out all fields correctly.');
    }
  }

  resetForm(): void {
    this.form.reset();
  }
}
