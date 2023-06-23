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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';  
import { LoaderComponent } from './Shared/loader/loader.component';
import { TachiSvgIconsComponent } from './Shared/tachi-svg-icons/tachi-svg-icons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatIconModule} from '@angular/material'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavlinksComponent,
    LibraryComponent,
    MangaCoverComponent,
    LoaderComponent,
    MangaDetailsComponent,
    SearchPageComponent,
    BrowseComponent,
    TachiSvgIconsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
