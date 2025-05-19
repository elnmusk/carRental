import { Component, inject } from '@angular/core';
import { CarService } from '../../services/car.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatTabsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  private carsService = inject(CarService)

  carsList = 
    toSignal(this.carsService.getCars(), { initialValue: null })

  popularCarsList = 
    toSignal(this.carsService.getPopularCars(), { initialValue: null})

}


