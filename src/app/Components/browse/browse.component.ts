import { Component } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent {
  extensions: any = [
    {
      language: 'Englsih',
      extensionList: ['MangaDex', 'Comick', 'Kemono', 'MangaPark'],
    },
    {
      language: 'Multi',
      extensionList: ['MangaDex', 'Comick', 'Kemono', 'MangaPark'],
    },
    {
      language: 'Hindi',
      extensionList: ['MangaDex', 'Comick', 'Kemono', 'MangaPark'],
    },
  ];
}
