import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-filtro-productos',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './filtro-productos.component.html',
  styleUrl: './filtro-productos.component.css'
})
export class FiltroProductosComponent {
  categoriasProductos = [
    {nombre: 'Protección Cabeza', checked: false},
    {nombre: 'Protección Visual', checked: false},
    {nombre: 'Protección Auditiva', checked: false},
    {nombre: 'Protección Respiratoria', checked: false},
    {nombre: 'Proteccion Manos', checked: false},
    {nombre: 'Proteccion Corporal', checked: false},
    {nombre: 'Calzado Seguridad', checked: false},
    {nombre: 'Accesorios y Articulos para Minería', checked: false}
  ];
  
  checkOnClick(check: boolean) {
    this.categoriasProductos.forEach(row => row.checked = check);
  }
}
