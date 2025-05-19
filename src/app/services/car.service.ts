import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {


  private cars = 'https://rentcar.stepprojects.ge/api/Car'
  private popularCars = 'https://rentcar.stepprojects.ge/api/Car/popular'

  constructor(private http:HttpClient) { }

  getCars():Observable<any> {
    return this.http.get<any>(this.cars)
  }

  getPopularCars():Observable<any> {
    return this.http.get<any>(this.popularCars)
  }
}
