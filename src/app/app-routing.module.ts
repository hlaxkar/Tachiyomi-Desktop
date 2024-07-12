import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BrowseComponent} from '../app/Components/browse/browse.component'
import { LibraryComponent } from './Components/library/library.component';
import { SearchPageComponent } from './Components/search-page/search-page.component';
import { MangaDetailsComponent } from './Components/manga-details/manga-details.component';
import { HistoryComponent } from './history/history.component';


const routes: Routes = [
  {
    path:'', component: LibraryComponent
  },
  {
    path:'browse', component: BrowseComponent
  },
  {
    path:'search', component:SearchPageComponent
  },
  {
    path:'history', component:HistoryComponent
  },
  {
    path:'details/:mangaid', component:MangaDetailsComponent
    // path:'details:id', component:MangaDetailsComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
