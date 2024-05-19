import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MangadexApiService } from 'src/app/Services/mangadex-api.service';
@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.scss'],
})
export class MangaDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private magnadex: MangadexApiService
  ) {
    this.mangaData = {
      id: '',
      type: '',
      attributes: {
        title: {
          en: '',
        },
        status:'',
        description: {
          en: '',
        },
      },
    };
  }

  isScrolled: Boolean = false;
  mangaId: any;
  mangaData: any;
  mangaAuthor='';
  mangaCover: any;
  coverUrl:any;
  tags:any;
  ngOnInit() {
    this.mangaId = this.route.snapshot.paramMap.get('mangaid');
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation?.extras.state['mangaData']) {
      this.mangaData = navigation.extras.state['mangaData'];
      console.log('From Local:', this.mangaData);
    } else {
      this.magnadex.getMangaDetails(this.mangaId).subscribe({
        next: (data: any) => {
          this.arrangeData(data.data);
          console.log('From Api:',this.mangaData);
          
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  arrangeData(data: any) {
    this.mangaData = data;
    this.mangaAuthor = data.relationships.find((rel: any) => rel.type === 'author').attributes.name;
    this.mangaCover = data.relationships.find((rel: any) => rel.type === 'cover_art').attributes.fileName;
    if(this.mangaCover){
      this.coverUrl =  'https://uploads.mangadex.org/covers/' +
      this.mangaId +
      '/' +
      this.mangaCover +
      '.512.jpg';
    }else{
      this.coverUrl = '../../assets/cover_error.svg';
    }


  }
}
