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

  searchManga(title?: string): Observable<any> {
    let url = this.url+'&includes%5B%5D=manga&includes%5B%5D=cover_art&order%5Brating%5D=desc&limit=20&';

    if (title) {
      url += `title=${title}`;
    }  

    

    return this.http.get(url);
  }

getCover(mangaid:string, fileName:string, res:string): Observable<any>{

  let url = this.imageurl+mangaid+'/'+fileName+'.'+res+'.jpg'
return this.http.get(url);

}

// https://api.mangadex.org/manga?limit=10&title=Attack&includedTagsMode=AND&excludedTagsMode=OR&contentRating%5B%5D=safe&contentRating%5B%5D=suggestive&contentRating%5B%5D=erotica&order%5Brating%5D=desc&includes%5B%5D=manga&includes%5B%5D=cover_art

}
