import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagePreloaderService {

  private imageCache = new Map<string, HTMLImageElement>();

  preloadImages(urls: string[]): void {
    urls.forEach(url => {
      if (!this.imageCache.has(url)) {
        const img = new Image();
        img.src = url;
        this.imageCache.set(url, img);
      }
    });
  }

  getImage(url: string): HTMLImageElement | undefined {
    return this.imageCache.get(url);
  }
}
