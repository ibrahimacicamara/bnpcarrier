import { NgIf } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css'
})
export class BarComponent {
  @Input() barIsvisible:boolean = true;

}
