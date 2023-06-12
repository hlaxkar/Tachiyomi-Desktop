import { Component } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {

 data:any = [{
  title:'Masamune kun no revenge', cover:'One.jpg'
},
{
  title:'Kanojo, Okarishimasu', cover:'Kanojo.jpg'
},
{
  title:'Horimiya', cover:'Horimiya.jpg'
},
{
  title:'Gokushufudou: The Way of the House Husband', cover:'Goku.jpg'
}]




}
