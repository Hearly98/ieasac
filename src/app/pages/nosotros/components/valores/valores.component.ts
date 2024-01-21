import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-valores',
  standalone:true,
  templateUrl: './valores.component.html',
  imports:[CommonModule, RouterLink],
  styleUrls: ['./valores.component.css']
})
export class ValoresComponent {

}
