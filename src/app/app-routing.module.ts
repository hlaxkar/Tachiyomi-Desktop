import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BrowseComponent} from '../app/Components/browse/browse.component'
import { LibraryComponent } from './Components/library/library.component';


const routes: Routes = [
  {
    path:'', component: LibraryComponent
  },
  {
    path:'browse', component: BrowseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
