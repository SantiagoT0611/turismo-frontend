import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-destino-detalle',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './destino-detalle.html',
  styleUrl: './destino-detalle.css',
})
export class DestinoDetalle {
    destino: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const destinos = [
      {
        id: 1,
        nombre: 'Amazonas',
        descripcion: 'Descripción completa...',
        imagen: ''
      },
      {
        id: 2,
        nombre: 'Cartagena',
        descripcion: 'Descripción completa...',
        imagen: ''
      },

      {
      id: 3,
      nombre: 'Eje cafetero',
      descripcion: 'Descripción completa...',
      imagen: ''
    }

    ];

    this.destino = destinos.find(d => d.id === id);
  }
}
