import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosComponent } from './components/datos/datos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, DatosComponent, FormularioComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
