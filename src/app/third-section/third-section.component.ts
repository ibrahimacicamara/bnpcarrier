import { Component } from '@angular/core';
import { ScrollingComponent } from "../scrolling/scrolling.component";

@Component({
  selector: 'app-third-section',
  standalone: true,
  imports: [ScrollingComponent],
  templateUrl: './third-section.component.html',
  styleUrl: './third-section.component.css'
})
export class ThirdSectionComponent {

}
