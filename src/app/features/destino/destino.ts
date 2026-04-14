import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-destino',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './destino.html',
  styleUrl: './destino.css',
})
export class Destino implements OnInit {

  destinos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  this.http.get<any[]>('destinos.json')
    .subscribe(data => {
      this.destinos = data;
    });
  }
}

