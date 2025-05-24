import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ExtraOptions,
} from '@angular/router';

import { BrowseComponent } from './Components/browse/browse.component';
import { LibraryComponent } from './Components/library/library.component';
import { SearchPageComponent } from './Components/search-page/search-page.component';
import { MangaDetailsComponent } from './Components/manga-details/manga-details.component';
import { HistoryComponent } from './Components/history/history.component';
import { MoreComponent } from './Components/more/more.component';
import { ReaderComponent } from './Components/reader/reader.component';
import { MainComponent } from './Components/main/main.component';
import { UpdatesComponent } from './Components/updates/updates.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'library', pathMatch: 'full' },
      { path: 'library', component: LibraryComponent },
      { path: 'browse', component: BrowseComponent },
      { path: 'updates', component: UpdatesComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'more', component: MoreComponent },
      { path: 'details/:mangaid', component: MangaDetailsComponent },
    ],
  },
  {
    path: 'reader/:mangaID/:chapterID',
    component: ReaderComponent,
  },
];

const routerOptions: ExtraOptions = {
  useHash: true,
  canceledNavigationResolution: 'replace', // default is 'replace'
  paramsInheritanceStrategy: 'emptyOnly',   // default is 'emptyOnly'
  urlUpdateStrategy: 'deferred',            // default is 'deferred'
  // Uncomment below if you're customizing these:
  // malformedUriErrorHandler: (error, serializer, url) => serializer.parse('/'),
  // titleStrategy: YourCustomTitleStrategy,
  // urlHandlingStrategy: YourCustomUrlStrategy,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
