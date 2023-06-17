import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MangadexApiService {

 private sampleData:any
  constructor(private http: HttpClient) {}
  private url = `https://api.mangadex.org/manga?`;
 private imageurl = 'https://uploads.mangadex.org/covers/';
  getSample(){
    this.http.get('src/assets/static/top10action.json').subscribe((res) => {
     this.sampleData = res;
    });
    return this.sampleData
  }

  searchManga(title?: string,order?: string, includedTagsMode?: string, excludedTagsMode?: string, contentRatings?: string[]): Observable<any> {
    let url = this.url;

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

getCover(mangaid:string, fileName:string, res:string): Observable<any>{

  let url = this.imageurl+mangaid+'/'+fileName+'.'+res+'.jpg'
return this.http.get(url);

}



}
