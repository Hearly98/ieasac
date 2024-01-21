import { Component } from '@angular/core';
import { ValoresComponent } from './components/valores/valores.component';
import { MisionComponent } from './components/mision/mision.component';
import { NosotrosServiceService } from './services/nosotros-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [ValoresComponent, MisionComponent, CommonModule],
  templateUrl: './nosotros.component.html'
})
export class NosotrosComponent {
  constructor(public nosotrosService: NosotrosServiceService) {}
}
