import { ContestantService } from './../../services/contestant.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contestant',
  templateUrl: './contestant.component.html',
  styleUrls: ['./contestant.component.scss']
})

export class ContestantComponent implements OnInit {
  displayedColumns: string[] = ['fullname', 'dateOfBirth', 'district', 'gender', 'action'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private contestantService: ContestantService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getContestantList();
  }

  getContestantList() {
    this.contestantService.getContestantList().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<any>(response);
      this.dataSource.paginator = this.paginator;
    });
  }

  onEdit(contestant) {
    this.router.navigate(['/contestant/edit/', contestant.id]);
  }

  onDelete(contestant: any) {
    const confirmDelete = confirm("Are you sure?");
    if (confirmDelete) {
      this.deleteContestant(contestant.id);
    }
  }

  deleteContestant(id) {
    this.contestantService.deleteContestant(id).subscribe((response: any) => {
      this.getContestantList();
      alert(response.message);
    });
  }
}
