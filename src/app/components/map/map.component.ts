import { ContestantService } from './../../services/contestant.service';
import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import * as L from 'leaflet';
import { antPath } from 'leaflet-ant-path';
import { NepalMapConst } from '../../constants/nepal-map-data.constant';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild('template', { static: true }) template: ElementRef;

  map: any;

  modalRef: BsModalRef;
  mapData: any;

  constructor(private modalService: BsModalService, private contestantService: ContestantService) { }

  ngOnInit() {
    // var geocodeService = L.esri.Geocoding.geocodeService();

    const map = L.map('map').setView([28.3949, 84.1240], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.on('click', function (e) {
      // alert(e.latlng);
      this.mapData = e;
    });

    var nepalData = NepalMapConst;

    L.geoJson(nepalData, {
      style: {
        fillColor: 'blue',
        weight: 2,
        opacity: 1,
        color: 'white',  //Outline color
        fillOpacity: 0.7
      }
    }).addTo(map);
  }

  openModal() {
    this.modalRef = this.modalService.show(this.template);

    // static for right now
    // we can retrive this address using leaflet library method from obtained latitude & longitude
    const selectedDistrict = "kathmandu";
    this.getContestantListByAddress(selectedDistrict);
  }

  contestantList: any;
  getContestantListByAddress(districtName) {
    this.contestantService.getContestantListByDistrictName(districtName).subscribe((response) => {
      console.log(response);
      this.contestantList = response;
    })
  }
}
