import { MapComponent } from './components/map/map.component';
import { AddContestantComponent } from './components/contestant/add-contestant/add-contestant.component';
import { ContestantRatingComponent } from './components/contestant-rating/contestant-rating.component';
import { ContestantComponent } from './components/contestant/contestant.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';


const routes: Routes = [
  {
    path: "", redirectTo: "contestant", pathMatch: "full"
  },
  {
    path: "contestant", component: ContestantComponent,
  },
  {
    path: "contestant/add", component: AddContestantComponent
  },
  {
    path: "contestant/edit/:id", component: AddContestantComponent
  }
  , {
    path: "contestant-rating", component: ContestantRatingComponent
  }, {
    path: "photo-gallery", component: PhotoGalleryComponent
  }, {
    path: "map", component: MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
