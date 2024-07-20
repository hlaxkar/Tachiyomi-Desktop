import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { SlideInOutAnimation } from 'src/app/Shared/animation';
// import 'turn.js' as turn
@Component({
  selector: 'app-reader',
  animations: [SlideInOutAnimation],
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss'],
})
export class ReaderComponent {
  constructor(private _location: Location) {}
  barsVisible = true;
  animationState = 'in';
  mangaPages = ["/assets/static/Horimiya.jpg", "/assets/static/Kanojo.jpg", "/assets/static/One.jpg", "/assets/static/Goku.jpg"];
  currentPage = 1;

  showBars() {
    this.barsVisible = !this.barsVisible;
    this.animationState = this.barsVisible ? 'in' : 'out';
  }
  goBack() {
    this._location.back();
  }

  goLeft() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
  goRight() {
    if (this.currentPage < this.mangaPages.length-1) {
      this.currentPage++;
    }
  }
}
