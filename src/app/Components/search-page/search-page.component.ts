import { Component, OnInit } from '@angular/core';
import { MangadexApiService } from 'src/app/Services/mangadex-api.service';
import {
  MangaModel,
  MangaRelationships,
} from 'src/app/Models/mangadex-manga.model';
import sampleData from '../../../assets/top10action.json';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit{
  searchForm: FormGroup = new FormGroup({
    search: new FormControl(''),
  });

  searchResults: any;
  isLoading: Boolean = true;

  constructor(private mangadexApiService: MangadexApiService) {}
  ngOnInit(): void {
    this.getPopularManga();
  }
  searchOpen: boolean = false;

  getManga(title: string) {
    this.isLoading = true;

    this.mangadexApiService.searchManga(title).subscribe((fetchedData: any) => {
      console.log(fetchedData);

      this.isLoading = false;
      this.searchResults = this.formatData(fetchedData.data);
    });
  }
  getPopularManga() {
    this.isLoading = true;

    this.mangadexApiService.getPopularManga().subscribe((fetchedData: any) => {
      console.log(fetchedData);

      this.isLoading = false;
      this.searchResults = this.formatData(fetchedData.data);
    });
  }

  log(data: any) {
    console.log(data);
  }
  formatData(data: any) {
    return data.map((data: any) => {
      let cover: any;
      data.relationships.forEach((data: any) => {
        if (data.type == 'cover_art') {
          cover = data.attributes?.fileName;
        }
      });

      return {
        title: data['attributes']['title']['en'],
        cover: cover,
        id: data.id,
        res: '256',
      };
    });
  }
}
