import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})

export class Inicio {

  usuario: string = '';
  password: string = '';
  error: string = '';


  constructor(private router: Router) { }

  login() {
    if (this.usuario === 'admin' && this.password === '1234') {
      this.error = '';
      this.router.navigate(['/contacto']);
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}
