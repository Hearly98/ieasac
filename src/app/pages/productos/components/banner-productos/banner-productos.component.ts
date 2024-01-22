import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-banner-productos',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './banner-productos.component.html',
  styleUrl: './banner-productos.component.css'
})
export class BannerProductosComponent {

}
