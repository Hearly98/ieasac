import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { ConfianzaComponent } from './components/confianza/confianza.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule,BannerComponent,  CategoriesComponent, MarcasComponent, TestimoniosComponent, ConfianzaComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
