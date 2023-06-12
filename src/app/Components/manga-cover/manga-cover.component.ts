import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manga-cover',
  templateUrl: './manga-cover.component.html',
  styleUrls: ['./manga-cover.component.scss']
})
export class MangaCoverComponent {
@Input() mangaData:any


}
