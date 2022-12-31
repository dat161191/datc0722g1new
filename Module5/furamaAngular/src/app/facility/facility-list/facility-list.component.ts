import {Component, OnInit} from '@angular/core';
import {Facility} from "../Facility";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityList: Facility[] = [];
  temp: Facility = {};

  constructor() {
  }

  ngOnInit(): void {
  }

  sendId(id: string) {

  }

  deleteFacility() {

  }
}
