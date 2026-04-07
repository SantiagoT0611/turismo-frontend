import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FavoritosService } from '../../core/services/favoritos';

@Component({
  selector: 'app-destino-detalle',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './destino-detalle.html',
  styleUrl: './destino-detalle.css',
})
export class DestinoDetalle {
  destino: any;

  constructor(
    private route: ActivatedRoute,
    private favService: FavoritosService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const destinos = [
      {
        id: 1,
        nombre: 'Amazonas',
        descripcion: 'El departamento del Amazonas se encuentra en el extremo sur de Colombia, limitando al sur con el río Amazonas y los países de Brasil y Perú, en la región conocida como la Amazonía colombiana. Su capital es Leticia, el punto principal de entrada y eje turístico de esta región selvatica. ',
        imagenes:[ 'https://wallpapers.com/images/featured/amazonas-8c3beryah6obx1a1.jpg',
          'https://media.istockphoto.com/id/1143075360/es/foto/amazon-rainforest-sunset-reflection.jpg?s=612x612&w=0&k=20&c=hieCC3Xm5fiJMgivG2XNtIk_M0bOSTadFNLwJg9_7r0=',
          'https://i.ytimg.com/vi/XbJCTbXIlaE/maxresdefault.jpg'

        ]
      },
      {
        id: 2,
        nombre: 'Cartagena',
        descripcion: 'Cartagena de Indias es una histórica ciudad portuaria en la costa caribeña de Colombia, famosa por su arquitectura colonial, murallas del siglo XVI (Patrimonio de la Humanidad por la UNESCO) y vibrante vida nocturna. Combina el encanto histórico de la Ciudad Amurallada con zonas modernas, playas y un clima tropical cálido, convirtiéndose en el destino turístico más importante de Colombia.',
        imagenes: ['https://ca-times.brightspotcdn.com/dims4/default/694d0d7/2147483647/strip/false/crop/1515x1000+0+0/resize/1486x981!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F48%2F75fb9d684e1b9673520e911a8a3c%2Fun-destino-para-gozar-958578.JPG',
          'https://media.staticontent.com/media/pictures/9495889e-54f9-40d2-939d-b04bf30b47c7',
          'https://aventurecolombia.com/wp-content/uploads/2019/06/bolivar-cartagena-colombia-Cartagena-Colombie%C2%A9PierreMuglia-SOLO-AC-13.jpg'
        ]
      },

      {
        id: 3,
        nombre: 'Eje cafetero',
        descripcion: 'El Eje Cafetero es una región cultural y geográfica en el corazón de los Andes colombianos, conformada principalmente por los departamentos de Caldas, Risaralda, Quindío y sectores de Valle del Cauca y Tolima. Famoso por producir uno de los mejores cafés suaves del mundo, destaca por sus paisajes de montañas verdes, fincas cafeteras tradicionales, el Valle de Cocora con palmas de cera y el Parque Nacional Natural Los Nevados. ',
        imagenes: ['https://tucurincaquindio.com/wp-content/uploads/2022/07/turismo-eje-cafetero.webp',
          'https://www.tragaviajes.com/wp-content/uploads/zona-Cafetera-1.jpg',
          'https://cdn.colombia.com/images/v2/turismo/sitios-turisticos/eje-cafetero/quindio-salento-800.jpg'
        ]
      }

    ];

    this.destino = destinos.find(d => d.id === id);
  }
  agregarAFavoritos() {
    if (this.destino) {
      this.favService.agregarFavorito(this.destino);
      alert('Agregado a favoritos');
    }
  }

}
