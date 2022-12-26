import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer/Customer";
import {CustomerType} from "../../../model/customer/CustomerType";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [
    {
      id : 1,
      customerType : {id:1,name:"Dimond"},
      name : "Trần Gia Gia",
      dateOfBirth : "1991/11/16",
      gender : true,
      idCard : "212567097",
      phoneNumber : "0385425443",
      email: "shmily1611@gmail.com",
      address : "Quảng Ngãi"
    },
    {
      id : 2,
      customerType : {id:1,name:"Dimond"},
      name : "Nguyễn Thị Cẩm Vân",
      dateOfBirth : "1999/01/08",
      gender : false,
      idCard : "212567197",
      phoneNumber : "0389233955",
      email: "Unknown",
      address : "Huế"
    },
    {
      id : 3,
      customerType : {id:1,name:"Dimond"},
      name : "Lê Tạ Hà Phương",
      dateOfBirth : "06/06/1995",
      gender : true,
      idCard : "212567297",
      phoneNumber : "0962002842",
      email: "Unknown",
      address : "Quảng Nam"
    },
    {
      id : 4,
      customerType : {id:1,name:"Dimond"},
      name : "Đặng Phương Bảo",
      dateOfBirth : "1999-06-15",
      gender : true,
      idCard : "212567297",
      phoneNumber : "0909091797",
      email: "Unknown",
      address : "Nha Trang"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
