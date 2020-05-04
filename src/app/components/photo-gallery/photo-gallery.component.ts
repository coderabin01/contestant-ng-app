import { environment } from './../../../environments/environment';
import { ContestantService } from './../../services/contestant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {
  imageUrl = environment.imageUrl;

  photoList: any;

  constructor(
    private contestantService: ContestantService
  ) { }

  ngOnInit() {
    this.getContestantPhotoList();
  }

  getContestantPhotoList() {
    this.contestantService.getContestantPhotoList().subscribe((response) => {
      this.photoList = response;
    });
  }

}
