import { Component } from '@angular/core';
import { SlideInOutAnimation } from 'src/app/Shared/animation';
@Component({
  selector: 'app-reader',
  animations: [SlideInOutAnimation],
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss'],
})
export class ReaderComponent {
  constructor() {}
  barsVisible = true;
  animationState = 'in'; 
  showBars() {
    this.barsVisible = !this.barsVisible;
    this.animationState = this.barsVisible ? 'in' : 'out';  
  }
}
