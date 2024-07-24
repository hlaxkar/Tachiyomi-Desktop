import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowseComponent } from '../app/Components/browse/browse.component';
import { LibraryComponent } from './Components/library/library.component';
import { SearchPageComponent } from './Components/search-page/search-page.component';
import { MangaDetailsComponent } from './Components/manga-details/manga-details.component';
import { HistoryComponent } from './Components/history/history.component';
import { MoreComponent } from './Components/more/more.component';
import { ReaderComponent } from './Components/reader/reader.component';
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'library', pathMatch: 'full' },
      { path: 'library', component: LibraryComponent },
      { path: 'browse', component: BrowseComponent },
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

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
