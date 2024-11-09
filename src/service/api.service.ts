import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  countryData(countryName:string): Observable<any> {
      return this.http.get(`https://restcountries.com/v3.1/name/${countryName}`);
  }

  createUser(data:any) : Observable<any>{
    return this.http.post('https://dummy.restapiexample.com/api/v1/create', data);
  }

  // updateuser(id : number, data : any) : Observable<any> {
  //   return this.http.patch(`https://dummy.restapiexample.com/api/v1/update/${id}`,data);
  // }

  updateuser(id : number, data : any) : Observable<any> {
    return this.http.patch(`https://reqres.in/api/users/${id}`,data);
  }

  deleteUser(id : number) : Observable<any>{
    return this.http.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`);
  }

}
