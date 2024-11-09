import { HttpClient, withFetch } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5000/auth/google/callback'; // Your NestJS API base URL

  constructor(private http: HttpClient) { 
    // Enable fetch for HttpClient
    this.http = this.http.constructor.prototype.withConfig({
      useFetch: true
    }).withConfig(withFetch);
  }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
