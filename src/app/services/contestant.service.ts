import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContestantService {
  baseIP = environment.baseIp;

  selectedContestant: any;
  constructor(
    private httpClient: HttpClient
  ) { }

  /* Start of Contestant API */
  getContestantList() {
    return this.httpClient.get(`${this.baseIP}contestant`);
  }

  getContestantListByDistrictName(address) {
    const httpParams = new HttpParams().set("address", address);
    return this.httpClient.get(`${this.baseIP}contestant/district`, { params: httpParams });
  }

  addContestant(body) {
    return this.httpClient.post(`${this.baseIP}contestant`, body);
  }

  updateContestant(contestandId, body) {
    return this.httpClient.put(`${this.baseIP}contestant/${contestandId}`, body);
  }

  deleteContestant(contestantId) {
    return this.httpClient.delete(`${this.baseIP}contestant/${contestantId}`, contestantId);
  }
  /* End of Contestant Component */

  /* District */
  getDistrictList() {
    return this.httpClient.get(`${this.baseIP}district`);
  }

  /* Contestant Rating */
  getContestantListWithRating(searchDate) {
    const httpParams = new HttpParams().set('from_date', searchDate.fromDate).set('to_date', searchDate.toDate);
    return this.httpClient.get(`${this.baseIP}contestant-rating`, { params: httpParams });
  }

  addContestantRating(body) {
    return this.httpClient.post(`${this.baseIP}contestant-rating`, body);
  }

  /* Photo Gallery */
  getContestantPhotoList() {
    return this.httpClient.get(`${this.baseIP}contestant/photos`);
  }
}
