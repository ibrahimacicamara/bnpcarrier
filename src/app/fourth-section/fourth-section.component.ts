import { NgFor } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ScrollingComponent } from "../scrolling/scrolling.component";

@Component({
  selector: 'app-fourth-section',
  standalone: true,
  imports: [NgFor, ScrollingComponent],
  templateUrl: './fourth-section.component.html',
  styleUrl: './fourth-section.component.css'
})
export class FourthSectionComponent {
  @ViewChild('widgetsContent') widgetsContent: ElementRef={} as ElementRef;
  @Input() works:{name:string,link:string,comment:string,image:string}[]=[];
   

  scrollLeft(){
    
    this.widgetsContent.nativeElement.scrollLeft -= 415;
    console.log(this.widgetsContent.nativeElement);
  }

  scrollRight(){
    this.widgetsContent.nativeElement.scrollLeft += 415;
  }

}
