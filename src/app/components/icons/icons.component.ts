import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'ic-root',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.css'
})
export class IconsComponent {

}
