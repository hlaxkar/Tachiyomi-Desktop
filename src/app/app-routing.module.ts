import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BrowseComponent} from '../app/Components/browse/browse.component'
import { LibraryComponent } from './Components/library/library.component';
import { SearchPageComponent } from './Components/search-page/search-page.component';
import { MangaDetailsComponent } from './Components/manga-details/manga-details.component';


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
    path:'details/:mangaid', component:MangaDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
