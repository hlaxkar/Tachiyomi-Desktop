import { Component } from '@angular/core';
import { MangadexApiService } from 'src/app/Services/mangadex-api.service';
import { MangaModel,MangaRelationships } from 'src/app/Models/mangadex-manga.model';

import sampleData from '../../../assets/top10action.json';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
sampledata:any


  constructor(private mangadexApiService:MangadexApiService){

    this.sampledata = sampleData.data.map(data=>{
      let cover:any
      data.relationships.forEach(
        (data)=>{
          if(data.type=='cover_art'){
           cover =  data.attributes?.fileName
          }
        }
      )
     
      return {title:data['attributes']['title']['en'],
      cover: cover,
      id: data.id,
      res:'256'
    }
    })
  }
  
  searchOpen:boolean = false;

  getmanga(title:string, order="desc"){
    console.log(sampleData.data);
   

    this.mangadexApiService.searchManga(title, order).subscribe((data:any)=>{
      console.log(data);
      
      let searchResults=data;
    })
   
  }
  

}
