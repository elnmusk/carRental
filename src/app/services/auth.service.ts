import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registration = 'https://rentcar.stepprojects.ge/api/Users/register'
  private login = 'https://rentcar.stepprojects.ge/api/Users/login'


  constructor(private http:HttpClient) { }

  // addUser():Observable<any> {
  //   return this.http.post<any>(`${this.registration}`)
  // }

  
}
