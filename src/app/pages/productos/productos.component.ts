import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroProductosComponent } from './components/filtro-productos/filtro-productos.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { BannerProductosComponent } from './components/banner-productos/banner-productos.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, BannerProductosComponent, FiltroProductosComponent, ListaProductosComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
