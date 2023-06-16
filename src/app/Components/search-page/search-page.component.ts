import { Component } from '@angular/core';
import { MangadexApiService } from 'src/app/Services/mangadex-api.service';
import { MangaModel } from 'src/app/Models/mangadex-manga.model';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {



  constructor(private mangadexApiService:MangadexApiService){
  }
  data: any = [
    {
      title: 'Masamune kun no revsenge',
      cover: 'One.jpg',
    },
    {
      title: 'Kanojo, Okarishimasu',
      cover: 'Kanojo.jpg',
    },
    {
      title: 'Horimiya',
      cover: 'Horimiya.jpg',
    },
    {
      title: 'Gokushufudou: The Way of the House Husband',
      cover: 'Goku.jpg',
    },
    {
      title: 'Masamune kun no revenge',
      cover: 'One.jpg',
    },
    {
      title: 'Kanojo, Okarishimasu',
      cover: 'Kanojo.jpg',
    },
    {
      title: 'Horimiya',
      cover: 'Horimiya.jpg',
    },
    {
      title: 'Gokushufudou: The Way of the House Husband',
      cover: 'Goku.jpg',
    },{
      title: 'Masamune kun no revenge',
      cover: 'One.jpg',
    },
    {
      title: 'Kanojo, Okarishimasu',
      cover: 'Kanojo.jpg',
    },
    {
      title: 'Horimiya',
      cover: 'Horimiya.jpg',
    },
    {
      title: 'Gokushufudou: The Way of the House Husband',
      cover: 'Goku.jpg',
    },
  ];
  
  searchOpen:boolean = false;

  getmanga(title:string, order="desc"){

    this.mangadexApiService.searchManga(title, order).subscribe((data:any)=>{
      console.log(data);
      
      let searchResults:MangaModel=data;
    })
  }
  

}
