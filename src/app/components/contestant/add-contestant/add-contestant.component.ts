import { ContestantService } from './../../../services/contestant.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-contestant',
  templateUrl: './add-contestant.component.html',
  styleUrls: ['./add-contestant.component.scss']
})
export class AddContestantComponent implements OnInit {
  contestantForm: FormGroup;
  selectedContestant: any;
  constructor(
    private formBuilder: FormBuilder,
    private contestantService: ContestantService,
    private router: Router
  ) { }

  ngOnInit() {
    this.selectedContestant = this.contestantService.selectedContestant;
    this.buildContestantForm();
    this.getDistrictDropdownList();
  }

  buildContestantForm() {
    this.contestantForm = this.formBuilder.group({
      firstName: this.selectedContestant ? this.selectedContestant.firstname : "",
      lastName: this.selectedContestant ? this.selectedContestant.lastname : "",
      dateOfBirth: this.selectedContestant ? (this.selectedContestant.dateOfBirth ? this.selectedContestant.dateOfBirth : "") : "",
      isActive: this.selectedContestant ? (this.selectedContestant.isActive ? this.selectedContestant.isActive : "") : "",
      districtId: this.selectedContestant ? (this.selectedContestant.districtId ? this.selectedContestant.districtId : "") : "",
      gender: this.selectedContestant ? this.selectedContestant.gender : "",
      photo: this.selectedContestant ? this.selectedContestant.photoUrl : "",
      address: this.selectedContestant ? this.selectedContestant.address : "",
    });
  }

  districtList: any;
  getDistrictDropdownList() {
    this.contestantService.getDistrictList().subscribe((response) => {
      this.districtList = response;
    });
  }

  fileProgress(fileInput: any) {
    const fileData = <File>fileInput.target.files[0];
    this.contestantForm.patchValue({ photo: fileData });
  };

  onSave() {
    if (this.contestantForm.pristine || this.contestantForm.invalid) return;

    const formData = new FormData();
    const formValue = this.contestantForm.value;
    formData.append("firstName", formValue.firstName);
    formData.append("lastName", formValue.lastName);
    formData.append("dateOfBirth", formValue.dateOfBirth);
    formData.append("isActive", formValue.isActive);
    formData.append("districtId", formValue.districtId);
    formData.append("gender", formValue.gender);
    formData.append("photo", formValue.photo);
    formData.append("address", formValue.address);

    if (this.selectedContestant) {
      this.updateContestant(formData);
    } else {
      this.addContestant(formData);
    }
  }

  onCancel() {
    this.router.navigate(['/contestant']);
  }

  addContestant(formData) {
    this.contestantService.addContestant(formData).subscribe((response: any) => {
      alert(response.message);
      this.router.navigate(['/contestant']);
    }, (error: HttpErrorResponse) => {
      alert(error.error.title);
    });
  }

  updateContestant(formData) {
    this.contestantService.updateContestant(this.selectedContestant.id, formData).subscribe((response: any) => {
      alert(response.message);
      this.router.navigate(['/contestant']);
    }, (error: HttpErrorResponse) => {
      alert(error.error.title);
    });
  }
}
