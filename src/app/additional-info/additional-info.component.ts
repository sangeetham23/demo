import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-additional-info',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './additional-info.component.html',
  styleUrl: './additional-info.component.scss'
})
export class AdditionalInfoComponent {
  additionalForm!: FormGroup;

  constructor(private fb: FormBuilder, private router : Router, private service : RegisterService) { }

  ngOnInit(): void {
    this.additionalForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      password: ['', [Validators.required ]],
      confirmPassword: ['', Validators.required],
      securityQuestion: ['', [Validators.required ]],
      securityAnswer: ['', Validators.required],
      agreeTerms: ['', Validators.requiredTrue],
    });

    this.service.additionalInformation$.subscribe(data => {
      if (data) {
        this.additionalForm.patchValue(data);
      }
    });
  }

  onSubmit(): void {
    this.service.updateAdditionalInformation(this.additionalForm.value);
    // const formData = {
    //   personalInformation: this.service.personalInformation$.getValue(),
    //   contactInformation: this.service.contactInformation$.getValue(),
    //   additionalInformation: this.service.additionalInformation$.getValue()
    // };
    const formData = {
      personalInformation: JSON.stringify(this.service.personalInformation$.getValue()),
      contactInformation: JSON.stringify(this.service.contactInformation$.getValue()),
      additionalInformation: JSON.stringify(this.service.additionalInformation$.getValue())
    };
    console.log(formData);
    
  }

  onBack(){
    this.router.navigate(['/contact-info']);
  }

  resetForm(): void {
    this.additionalForm.reset();
  }
}
