import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MangadexApiService {

 private sampleData:any
  constructor(private http: HttpClient) {}


  getSample(){
    this.http.get('src/assets/static/top10action.json').subscribe((res) => {
     this.sampleData = res;
    });
    return this.sampleData
  }

  searchManga(title?: string,order?: string, includedTagsMode?: string, excludedTagsMode?: string, contentRatings?: string[]): Observable<any> {
    let url = `https://api.mangadex.org/manga?`;

    if (title) {
      url += `title=${title}&`;
    }

    if (includedTagsMode) {
      url += `includedTagsMode=${includedTagsMode}&`;
    }

    if (excludedTagsMode) {
      url += `excludedTagsMode=${excludedTagsMode}&`;
    }

    if (contentRatings) {
      url += `contentRating%5B%5D=${contentRatings[0]}&`;
      url += `contentRating%5B%5D=${contentRatings[1]}&`;
      url += `contentRating%5B%5D=${contentRatings[2]}&`;
    }

    if (order) {
      url += `order%5Brating%5D=desc`;
    }

    return this.http.get(url);
  }
}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MangaService {

//   constructor(private http: HttpClient) {}

//   getMangas(title: string, includedTagsMode: string, excludedTagsMode: string, contentRatings: string[], order: string): Observable<Manga[]> {
//     const url = `https://api.mangadex.org/manga?limit=2&title=${title}&includedTagsMode=${includedTagsMode}&excludedTagsMode=${excludedTagsMode}&contentRating%5B%5D=${contentRatings[0]}&contentRating%5B%5D=${contentRatings[1]}&contentRating%5B%5D=${contentRatings[2]}&order%5Brating%5D=${order}`;
//     return this.http.get(url);
//   }

// }