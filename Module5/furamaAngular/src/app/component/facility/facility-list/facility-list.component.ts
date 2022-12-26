import {Component, OnInit} from '@angular/core';
import {Facility} from "../../../model/facility/Facility";
import {FacilityType} from "../../../model/facility/FacilityType";
import {RentType} from "../../../model/facility/RentType";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityList: Facility[] = [
    {
      id: 1,
      name: "SuperVilla",
      area: 500,
      cost: 5000000,
      maxPeople: 15,
      facilityType: {id: 1, name: "Villa"},
      rentType: {id: 1, name: "Year"},
      standardRoom: "VIP",
      descriptionOtherConvenience: "Has 1 helicopter",
      poolArea: 50,
      numberOfFloors: 5,
    },
    {
      id: 2,
      name: "SuperHouse",
      area: 300,
      cost: 3000000,
      maxPeople: 10,
      facilityType: {id: 2, name: "House"},
      rentType: {id: 2, name: "Month"},
      standardRoom: "VIP",
      descriptionOtherConvenience: "Has 1 Lamborghini",
      numberOfFloors: 2,
    },
    {
      id: 3,
      name: "SuperRoom",
      area: 500,
      cost: 1000000,
      maxPeople: 6,
      facilityType: {id: 3, name: "Room"},
      rentType: {id: 3, name: "Date"},
      standardRoom: "NOMARL",
      descriptionOtherConvenience: "Has 1 Ducati",
      facilityFree: "Massage Body"
    },{
      id: 3,
      name: "SuperRoom",
      area: 500,
      cost: 1000000,
      maxPeople: 6,
      facilityType: {id: 3, name: "Room"},
      rentType: {id: 3, name: "Date"},
      standardRoom: "NOMARL",
      descriptionOtherConvenience: "Has 1 Ducati",
      facilityFree: "Massage Body"
    },{
      id: 3,
      name: "SuperRoom",
      area: 500,
      cost: 1000000,
      maxPeople: 6,
      facilityType: {id: 3, name: "Room"},
      rentType: {id: 3, name: "Date"},
      standardRoom: "NOMARL",
      descriptionOtherConvenience: "Has 1 Ducati",
      facilityFree: "Massage Body"
    },{
      id: 3,
      name: "SuperRoom",
      area: 500,
      cost: 1000000,
      maxPeople: 6,
      facilityType: {id: 3, name: "Room"},
      rentType: {id: 3, name: "Date"},
      standardRoom: "NOMARL",
      descriptionOtherConvenience: "Has 1 Ducati",
      facilityFree: "Massage Body"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
