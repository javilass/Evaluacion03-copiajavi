import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contacto.html',
})
export class Contacto implements OnInit {

  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  datosGuardados: any = null;

  ngOnInit() {
    const data = localStorage.getItem('contacto');
    if (data) {
      this.datosGuardados = JSON.parse(data);
    }
  }

  enviar(form: any) {
    if (form.invalid) return;

    const datos = {
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje
    };

    // Guardar en localStorage
    localStorage.setItem('contacto', JSON.stringify(datos));

    // Mostrar en pantalla
    this.datosGuardados = datos;

    form.reset();
  }
}
