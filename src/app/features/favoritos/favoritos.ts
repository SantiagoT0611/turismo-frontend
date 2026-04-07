import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FavoritosService } from '../../core/services/favoritos';
@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {
  favoritos: any[] = [];

  constructor(private favService: FavoritosService) {}

  ngOnInit() {
    this.cargarFavoritos();
  }

  cargarFavoritos() {
    this.favoritos = this.favService.obtenerFavoritos();
  }

  eliminar(id: number) {
    this.favService.eliminarFavorito(id);
    this.cargarFavoritos();
  }
}

