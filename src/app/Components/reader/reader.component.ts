import { Component, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { SlideInOutAnimation } from 'src/app/Shared/animation';
import { ActivatedRoute } from '@angular/router';
import { MangadexApiService } from 'src/app/Services/mangadex-api.service';
export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}
@Component({
  selector: 'app-reader',
  animations: [SlideInOutAnimation],
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss'],
})
export class ReaderComponent {
  constructor(private _location: Location, private route: ActivatedRoute, private mangadex: MangadexApiService) {
  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.goRight();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.goLeft();
    }
  }
  ngOnInit(): void {
    this.mangaId = this.route.snapshot.paramMap.get('mangaID');
    this.chapterId = this.route.snapshot.paramMap.get('chapterID');
    this.mangadex.getChapterbyId(this.chapterId).subscribe(data => {
      this.chapterTitle = data.data.attributes.title;
      this.chapterNumber = data.data.attributes.chapter;
      this.volumeNumber = data.data.attributes.volume;
    })

    this.mangadex.getChapterPages(this.chapterId).subscribe(data => {
      this.mangaPagesData = data.chapter.data;
      this.mangaPagesDataSaver = data.chapter.dataSaver;
      this.hash = data.chapter.hash;
      this.baseUrl = data.baseUrl;
      this.readingArray = this.mangaPagesDataSaver;
    })

  }
  barsVisible = false;
  animationState = 'in';
  mangaPagesDataSaver = ["/assets/static/Horimiya.jpg", "/assets/static/Kanojo.jpg", "/assets/static/One.jpg", "/assets/static/Goku.jpg"];
  currentPage = 1;
  mangaId: any;
  chapterId: any;
  mangaPagesData: any = [];
  hash: any;
  baseUrl: string = "";
  readingArray: any = this.mangaPagesData;
  quality: 'data' | 'data-saver' = "data-saver";
  chapterTitle: string = ""
  chapterNumber: string = ""
  volumeNumber: string = ""
  toggleQuality() {
    this.quality = this.quality === 'data' ? 'data-saver' : 'data';
    this.readingArray = this.quality === 'data' ? this.mangaPagesData : this.mangaPagesDataSaver;
  }
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
    if (this.currentPage < this.readingArray.length - 1) {
      this.currentPage++;
    }
  }

}
