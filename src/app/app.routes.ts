import { RouterModule, Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Destino } from './features/destino/destino';
import { Favoritos } from './features/favoritos/favoritos';
import { Nosotros } from './features/nosotros/nosotros';
import { Contacto } from './features/contacto/contacto';
import { NgModule } from '@angular/core';
import { DestinoDetalle } from './features/destino-detalle/destino-detalle';

 export const routes: Routes = [
    {path: '', component: Home, pathMatch: 'full'},
    {path: 'destino', component: Destino},
    {path: 'destino/:id', component: DestinoDetalle},
    {path: 'favoritos',  component: Favoritos},
    {path: 'nosotros' , component: Nosotros},
    {path: 'contacto', component: Contacto}
];
