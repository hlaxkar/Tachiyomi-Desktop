import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { SlideInOutAnimation } from 'src/app/Shared/animation';
// import $ from 'jquery';
declare var $: any; // (or) import * as $ from 'jquery';
@Component({
  selector: 'app-reader',
  animations: [SlideInOutAnimation],
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss'],
})
export class ReaderComponent {
  constructor(private _location: Location) {
  }
  ngOnInit(): void {
    // You can now use jQuery here if needed
    $(document).ready(() => {
      // Initialize turn.js on the element with id 'mangareader'
      $('#”flipbook”').turn({
        display: 'double',
        acceleration: true,
        gradients: !$.isTouch,
        elevation:50,
    });
      $(window).bind('keydown', function(e: { keyCode: number; }){
		
        if (e.keyCode==37)
          $('#”flipbook”').turn('previous');
        else if (e.keyCode==39)
          $('#”flipbook”').turn('next');
          
      });
    });

  }
  barsVisible = false;
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
