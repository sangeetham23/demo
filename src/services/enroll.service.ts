import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(private http : HttpClient) { }

  enrollCourse(title:string){
    alert('Successfully enrolled to '+title+' course');
  }

  getInfo() : Observable <any>{
    return this.http.get("https://api.restful-api.dev/objects");
  }
}
