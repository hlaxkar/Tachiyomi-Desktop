import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.scss']
})
export class MangaDetailsComponent {
  constructor(private route: ActivatedRoute) {}
  mangaId:any
  ngOnInit(){
    this.mangaId = this.route.snapshot.paramMap.get('mangaid')
  }
}
