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
ngOnInit(){
console.log(this.mangaData);
if(this.mangaData.cover){

  this.cover = 'https://uploads.mangadex.org/covers/'+this.mangaData.id+'/'+this.mangaData.cover+'.256.jpg';
  console.log(this.cover);
}


}

 


}
