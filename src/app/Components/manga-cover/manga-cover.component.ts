import { Component, Input } from '@angular/core';
import { MangadexApiService } from 'src/app/Services/mangadex-api.service';
@Component({
  selector: 'app-manga-cover',
  templateUrl: './manga-cover.component.html',
  styleUrls: ['./manga-cover.component.scss']
})
export class MangaCoverComponent {
@Input() mangaData:any
cover:any = '../../../assets/static/One.jpg';
constructor(private mangadex:MangadexApiService){
if(this.mangaData.cover){
  console.log(this.mangaData.cover);
  
  this.mangadex.getCover(this.mangaData.id,this.mangaData.cover, this.mangaData.res).subscribe(
    data=>{
this.cover=data
    }
  )
}
}
}
