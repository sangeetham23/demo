import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  personalInformation$ = new BehaviorSubject<any>({});
  contactInformation$ = new BehaviorSubject<any>({});
  additionalInformation$ = new BehaviorSubject<any>({});

  constructor() {}

  updatePersonalInformation(data: any): void {
    this.personalInformation$.next(data);
  }

  updateContactInformation(data: any): void {
    console.log("Service",data);
    
    this.contactInformation$.next(data);
  }

  updateAdditionalInformation(data: any): void {
    this.additionalInformation$.next(data);
  }
}
