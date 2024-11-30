import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild ,Renderer2, Input} from '@angular/core';
import { BarComponent } from "../bar/bar.component";
import { NgFor } from '@angular/common';
import { ScrollingComponent } from "../scrolling/scrolling.component";

@Component({
  selector: 'app-first-section',
  standalone: true,
  imports: [BarComponent, NgFor, ScrollingComponent],
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.css'
})

export class FirstSectionComponent {
  constructor(private renderer:Renderer2){}
  @ViewChild('mybar', {static: false}) private bar: ElementRef<HTMLDivElement>={} as ElementRef<HTMLDivElement> ;
  @ViewChild('bar') private appbar:ElementRef={} as ElementRef;

  @Output() barIsVisible = new EventEmitter<boolean>();
  @Input() images:{name:string,link:string,comment:string,image:string}[]=[];
  @Input() buttons:{name:string,link:string,comment:string,image:string}[]=[];
  @HostListener('window:scroll', ['$event'])  
  isScrolledIntoView(){
    
    if (this.bar){
      const rect = this.bar.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      // const bottomShown = rect.bottom <= window.innerHeight;
      this.barIsVisible.emit(topShown);
      if(!topShown){
        this.renderer.setStyle(this.appbar.nativeElement,"display","none");
      }else{
        this.renderer.setStyle(this.appbar.nativeElement,"display","flex");

      }
    }
  }
  
}
