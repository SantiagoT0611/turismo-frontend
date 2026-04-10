import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css'], 
})
export class Contacto {

  contacto = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  enviarFormulario() {
    console.log('Formulario enviado:', this.contacto);

    alert('Gracias por contactarnos ✈️🌍');

    this.contacto = {
      nombre: '',
      email: '',
      mensaje: ''
    };
  }
}