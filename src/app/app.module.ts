import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NavlinksComponent } from './Components/navbar/navlinks/navlinks.component';
import { LibraryComponent } from './Components/library/library.component';
import { MangaCoverComponent } from './Components/manga-cover/manga-cover.component';
import { MangaDetailsComponent } from './Components/manga-details/manga-details.component';
import { SearchPageComponent } from './Components/search-page/search-page.component';
import { BrowseComponent } from './Components/browse/browse.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavlinksComponent,
    LibraryComponent,
    MangaCoverComponent,
    MangaDetailsComponent,
    SearchPageComponent,
    BrowseComponent
  ],
  imports: [
    BrowserModule,
   
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
