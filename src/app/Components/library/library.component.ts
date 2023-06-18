import { Component } from '@angular/core';
import sampleData from '../../../assets/top10action.json'
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent {
  data:any
ngOnInit(){
  this.data = sampleData.data.map(data=>{
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
}
  
 
