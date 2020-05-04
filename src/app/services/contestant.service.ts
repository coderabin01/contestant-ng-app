import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContestantService {
  baseIP = environment.baseIp;
  constructor(
    private httpClient: HttpClient
  ) { }

  /* Start of Contestant API */
  getContestantList() {
    return this.httpClient.get(`${this.baseIP}contestant`);
  }

  addContestant(body) {
    return this.httpClient.post(`${this.baseIP}contestant`, body);
  }

  deleteContestant(contestantId) {
    return this.httpClient.delete(`${this.baseIP}contestant/${contestantId}`, contestantId);
  }
  /* End of Contestant Component */

  getDistrictList() {
    return this.httpClient.get(`${this.baseIP}district`);
  }

  getContestantListWithRating(searchDate) {
    const httpParams = new HttpParams().set('from_date', searchDate.fromDate).set('to_date', searchDate.toDate);
    return this.httpClient.get(`${this.baseIP}contestant-rating`, { params: httpParams });
  }

  addContestantRating(body) {
    return this.httpClient.post(`${this.baseIP}contestant-rating`, body);
  }
}
