import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContestantComponent } from './components/contestant/contestant.component';
import { ContestantRatingComponent } from './components/contestant-rating/contestant-rating.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { MapComponent } from './components/map/map.component';

import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddContestantComponent } from './components/contestant/add-contestant/add-contestant.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ContestantComponent,
    ContestantRatingComponent,
    PhotoGalleryComponent,
    MapComponent,
    AddContestantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // material libraries
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
