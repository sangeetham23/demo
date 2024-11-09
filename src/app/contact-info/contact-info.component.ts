import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private router : Router, private service : RegisterService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      address: ['', Validators.required],
      city: ['', [Validators.required ]],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    });

    this.service.contactInformation$.subscribe(data => {
      console.log("ContactForm",data);
      
      if (data) {
        this.contactForm.patchValue(data);
      }
    });
  }

  onNext(){
    this.service.updateContactInformation(this.contactForm.value);
    this.router.navigate(['/additional-info']);
  }

  onBack(){
    this.router.navigate(['/personal-info']);
  }

  resetForm(): void {
    this.contactForm.reset();
  }
}