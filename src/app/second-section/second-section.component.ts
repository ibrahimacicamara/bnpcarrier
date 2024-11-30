import { Component } from '@angular/core';
import { ScrollingComponent } from "../scrolling/scrolling.component";

@Component({
  selector: 'app-second-section',
  standalone: true,
  imports: [ScrollingComponent],
  templateUrl: './second-section.component.html',
  styleUrl: './second-section.component.css'
})
export class SecondSectionComponent {

}
