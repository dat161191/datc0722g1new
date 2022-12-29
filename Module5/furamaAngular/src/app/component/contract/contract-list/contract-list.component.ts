import {Component, OnInit} from '@angular/core';
import {ContractDetail} from "../../../model/contract/ContractDetail";
import {Employee} from "../../../model/employee/Employee";
import {Customer} from "../../../model/customer/Customer";
import {Facility} from "../../../model/facility/Facility";
import {Contract} from "../../../model/contract/Contract";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[] = [
    {
      id: 1,
      startDate: "26/12/2022",
      endDate: "05/01/2023",
      deposit: 1000000,
      employee: {id: "NV-0001", name: "Nguyễn Gia Hân"},
      customer: {
        id: 'KH-0001',
        customerType: {id: 1, name: "Dimond"},
        name: "Trần Gia Gia",
        dateOfBirth: "1991/11/16",
        gender: true,
        idCard: "212567097",
        phoneNumber: "0385425443",
        email: "shmily1611@gmail.com",
        address: "Quảng Ngãi"
      },
      facility: {
        id: "DV-001",
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
      }
    },
    {
      id: 2,
      startDate: "27/12/2022",
      endDate: "05/01/2023",
      deposit: 1000000,
      employee: {id: "NV-0002", name: "Lý Phương"},
      customer: {
        id: 'KH-0002',
        customerType: {id: 1, name: "Dimond"},
        name: "Nguyễn Thị Cẩm Vân",
        dateOfBirth: "1999/01/08",
        gender: false,
        idCard: "212567197",
        phoneNumber: "0389233955",
        email: "Unknown",
        address: "Huế"
      },
      facility: {
        id: "DV-001",
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
      }
    },
    {
      id: 3,
      startDate: "28/12/2022",
      endDate: "09/01/2023",
      deposit: 1000000,
      employee: {id: "NV-0003", name: "Lê Long "},
      customer: {
        id: 'KH-0003',
        customerType: {id: 1, name: "Dimond"},
        name: "Lê Tạ Hà Phương",
        dateOfBirth: "06/06/1995",
        gender: true,
        idCard: "212567297",
        phoneNumber: "0962002842",
        email: "Unknown",
        address: "Quảng Nam"
      },
      facility: {
        id: "DV-002",
        name: "SuperHouse",
        area: 300,
        cost: 3000000,
        maxPeople: 10,
        facilityType: {id: 2, name: "House"},
        rentType: {id: 2, name: "Month"},
        standardRoom: "VIP",
        descriptionOtherConvenience: "Has 1 Lamborghini",
        numberOfFloors: 2,
      }
    },
    {
      id: 4,
      startDate: "26/12/2022",
      endDate: "06/01/2023",
      deposit: 1000000,
      employee: {id: "NV-0004", name: "Nguyễn Khang"},
      customer: {
        id: 'KH-0004',
        customerType: {id: 1, name: "Dimond"},
        name: "Đặng Phương Bảo",
        dateOfBirth: "1999-06-15",
        gender: true,
        idCard: "212567297",
        phoneNumber: "0909091797",
        email: "Unknown",
        address: "Nha Trang"
      },
      facility: {
        id: "DV-003",
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
    }

  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
