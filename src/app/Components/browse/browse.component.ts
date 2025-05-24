import { Component } from '@angular/core';

@Component({
    selector: 'app-browse',
    templateUrl: './browse.component.html',
    styleUrls: ['./browse.component.scss'],
    standalone: false
})
export class BrowseComponent {
  extensions: any = [
    {
      language: 'English',
      extensionList: ['MangaDex'],
    },
    // {
    //   language: 'Multi',
    //   extensionList: ['MangaDex', 'Comick', 'Kemono', 'MangaPark'],
    // },
    // {
    //   language: 'Hindi',
    //   extensionList: ['MangaDex', 'Comick', 'Kemono', 'MangaPark'],
    // },
  ];
}
