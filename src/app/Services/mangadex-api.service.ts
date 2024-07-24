import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MangadexApiService {
  private sampleData: any;
  constructor(private http: HttpClient) { }
  private url = `https://api.mangadex.dev/`;
  private imageurl = 'https://uploads.mangadex.org/covers/';
  getSample() {
    return this.http.get('src/assets/static/top10action.json');
  }

  searchManga(title?: string): Observable<any> {
    const url = `${this.url}manga?includes[]=manga&includes[]=cover_art&order[rating]=desc&limit=20${title ? `&title=${title}` : ''}`;
    return this.http.get(url);
  }

  getCover(mangaid: string, fileName: string, res: string): Observable<any> {
    let url = this.imageurl + mangaid + '/' + fileName + '.' + res + '.jpg';
    return this.http.get(url);
  }
  getMangaDetails(mangaid: string): Observable<any> {
    let url = `${this.url}manga/${mangaid}?includes%5B%5D=manga&includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5D=artist&includes%5B%5D=tag&includes%5B%5D=creator`;
    return this.http.get(url);
  }
  getChapterList(mangaid: string): Observable<any> {
    let url = `${this.url}manga/${mangaid}/feed?limit=100&translatedLanguage%5B%5D=en&contentRating%5B%5D=safe&contentRating%5B%5D=suggestive&contentRating%5B%5D=erotica&contentRating%5B%5D=pornographic&includeFutureUpdates=1&order%5BcreatedAt%5D=asc&order%5BupdatedAt%5D=asc&order%5BpublishAt%5D=asc&order%5BreadableAt%5D=asc&order%5Bvolume%5D=asc&order%5Bchapter%5D=asc&includes%5B%5D=scanlation_group&includeEmptyPages=0&includeFuturePublishAt=0&includeExternalUrl=0`;
    return this.http.get(url);
  }
  getPopularManga(): Observable<any> {
    let url = `${this.url}manga?includes[]=cover_art&includes[]=artist&includes[]=author&order[followedCount]=desc&contentRating[]=safe&contentRating[]=suggestive&hasAvailableChapters=true&limit=20`;
    return this.http.get(url);
  }
  getChapterPages(chapterID: string): Observable<any> {
    let url = `${this.url}at-home/server/${chapterID}`;
    return this.http.get(url)
  }
  getMangaByTag(tag: string): Observable<any> {
    let url = `${this.url}manga?includes[]=cover_art&includes[]=artist&includes[]=author&contentRating[]=safe&contentRating[]=suggestive&hasAvailableChapters=true&limit=20&tagIds[]=${tag}`;
    return this.http.get(url);
  }
  getChapterbyId(chapterId: string): Observable<any> {
    let url = `${this.url}chapter/${chapterId}`;
    return this.http.get(url)
  }

}
