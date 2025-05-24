import { Component, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { PageSlideAnimationRTL, SlideInOutAnimation} from 'src/app/Shared/animation';
import { ActivatedRoute} from '@angular/router';
import { MangadexApiService } from 'src/app/Services/mangadex-api.service';
import { ImagePreloaderService } from 'src/app/Services/image-preloader.service';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
}
@Component({
    selector: 'app-reader',
    animations: [PageSlideAnimationRTL, SlideInOutAnimation],
    templateUrl: './reader.component.html',
    styleUrls: ['./reader.component.scss'],
    standalone: false
})
export class ReaderComponent {
  constructor(
    private _location: Location,
    private route: ActivatedRoute,
    private mangadex: MangadexApiService,
    private imagePreloader: ImagePreloaderService
  ) {}
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
    this.mangadex.getChapterbyId(this.chapterId).subscribe((data) => {
      this.chapterTitle = data.data.attributes.title;
      this.chapterNumber = data.data.attributes.chapter;
      this.volumeNumber = data.data.attributes.volume;
    });

    this.mangadex.getChapterPages(this.chapterId).subscribe((data) => {
      this.mangaPagesData = data.chapter.data;
      this.mangaPagesDataSaver = data.chapter.dataSaver;
      this.hash = data.chapter.hash;
      this.baseUrl = data.baseUrl;
      this.readingArray = this.mangaPagesDataSaver;
      this.totalPages = data.chapter.data.length;
      this.preloadAdjacentImages();
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }
  barsVisible = true;
  animationState = 'default';
  mangaPagesDataSaver = [
    '/assets/static/Horimiya.jpg',
    '/assets/static/Kanojo.jpg',
    '/assets/static/One.jpg',
    '/assets/static/Goku.jpg',
  ];
  currentPage = 0;
  mangaId: any;
  chapterId: any;
  mangaPagesData: any = [];
  hash: any;
  baseUrl: string = '';
  readingArray: any = this.mangaPagesData;
  quality: 'data' | 'data-saver' = 'data-saver';
  chapterTitle: string = '';
  chapterNumber: string = '';
  volumeNumber: string = '';
  isLoading = true;
  totalPages: Number = 0;
  toggleQuality() {
    this.quality = this.quality === 'data' ? 'data-saver' : 'data';
    this.readingArray =
      this.quality === 'data' ? this.mangaPagesData : this.mangaPagesDataSaver;
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
      this.preloadAdjacentImages();
      // this.animationState = 'default';
      this.animationState = 'slideLeft';
    }
  }
  goRight() {
    if (this.currentPage < this.readingArray.length - 1) {
      this.currentPage++;
      this.preloadAdjacentImages();
      // this.animationState = 'default';
      this.animationState = 'slideRight';
    }
  }
  onAnimationDone($event:any) {
    this.animationState = 'default';
    console.log($event);
    
  }
  preloadAdjacentImages(): void {
    const preloadUrls = [];
    for (let i = this.currentPage - 2; i <= this.currentPage + 3; i++) {
      if (i >= 0 && i < this.readingArray.length) {
        preloadUrls.push(
          `${this.baseUrl}/${this.quality}/${this.hash}/${this.readingArray[i]}`
        );
      }
    }
    this.imagePreloader.preloadImages(preloadUrls);
  }
  getImageUrl(page: string): string {
    const url = `${this.baseUrl}/${this.quality}/${this.hash}/${page}`;
    const preloadedImage = this.imagePreloader.getImage(url);
    return preloadedImage ? preloadedImage.src : url;
  }
  get currentPageValue(): number {
    return this.currentPage + 1; // Convert zero-indexed to one-indexed
  }

  set currentPageValue(value: number) {
    this.currentPage = value - 1; // Convert one-indexed to zero-indexed
  }
}
