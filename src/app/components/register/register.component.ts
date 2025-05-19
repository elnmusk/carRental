import { Component, inject } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatIconModule, RouterModule],

  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone:true
})
export class RegisterComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  nameFormControl = new FormControl('', [Validators.required])
  phoneFormControl = new FormControl('', [Validators.required])
  passFormControl = new FormControl('', [Validators.required])

  private authService = inject(AuthService)

  

}
