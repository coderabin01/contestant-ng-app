import { HttpErrorResponse } from '@angular/common/http';
import { ContestantService } from './../../services/contestant.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contestant-rating',
  templateUrl: './contestant-rating.component.html',
  styleUrls: ['./contestant-rating.component.scss']
})
export class ContestantRatingComponent implements OnInit {
  searchForm: FormGroup;
  ratingForm: FormGroup;
  displayedColumns: string[] = ['fullname', 'dateOfBirth', 'district', 'rating'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private contestantService: ContestantService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.buildSearchForm();
    this.buildRatingForm();
    this.getContestantRatingList();
    this.dataSource.paginator = this.paginator;
  }

  buildSearchForm() {
    this.searchForm = this.formBuilder.group({
      fromDate: "",
      toDate: ""
    });
  }

  buildRatingForm() {
    this.ratingForm = this.formBuilder.group({
      contestantId: "",
      rating: ""
    });
  }

  getContestantRatingList() {
    this.contestantService.getContestantListWithRating(this.searchForm.value).subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<any>(response);
    });
  }

  selectedContestant: any;
  setSelectedContestant(contestant) {
    this.buildRatingForm();
    this.selectedContestant = contestant;
    this.ratingForm.patchValue({ contestantId: contestant.id });
  }

  addRating() {
    this.contestantService.addContestantRating(this.ratingForm.value).subscribe((response) => {
      alert(response);
      this.getContestantRatingList();
    }, (error: HttpErrorResponse) => {
      alert(error.error.title);
    });
  }
}
