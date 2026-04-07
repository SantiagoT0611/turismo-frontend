import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {

  private key = 'favoritos';

  obtenerFavoritos() {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  agregarFavorito(destino: any) {
    let favoritos = this.obtenerFavoritos();


    const existe = favoritos.find((f: any) => f.id === destino.id);

    if (!existe) {

      const nuevoFavorito = {
       id: destino.id,
       nombre: destino.nombre,
       descripcion: destino.descripcion,
       imagen: destino.imagen
        ? destino.imagen
        : destino.imagenes?.[0],

        imagenes: destino.imagenes || []
      };

      favoritos.push(nuevoFavorito);

      localStorage.setItem(this.key, JSON.stringify(favoritos));
    }
  }

  eliminarFavorito(id: number) {
    let favoritos = this.obtenerFavoritos();

    favoritos = favoritos.filter((f: any) => f.id !== id);

    localStorage.setItem(this.key, JSON.stringify(favoritos));
  }
}

