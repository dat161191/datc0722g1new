import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "../../../model/employee/Employee";
import {Facility} from "../../../model/facility/Facility";
import {Customer} from "../../../model/customer/Customer";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contract: FormGroup;
  employees:Employee[]=[
    {id:"NV-0001",name:"Nguyễn Gia Hân"},
    {id:"NV-0002",name:"Lý Phương"},
    {id:"NV-0003",name:"Lê Long "},
    {id:"NV-0004",name:"Nguyễn Khang"},
    ]
  facilitys:Facility[]=[
    {id:"DV-0001",name:"SuperVilla"},
    {id:"DV-0002",name:"SuperHouse"},
    {id:"DV-0003",name:"SuperVilla"},
    {id:"DV-0004",name:"SuperSuperVilla"}
  ]
  customers:Customer[]=[
    {id:'KH-0001',name:'Trần Quốc Đạt'},
    {id:'KH-0002',name:'Nguyễn Thị Cẩm Vân'},
    {id:'KH-0003',name:'Lê Tạ Hà Phương'},
    {id:'KH-0004',name:'Đặng Phương Bảo'},
  ]

  constructor() {
    this.contract=new FormGroup({
      id: new FormControl('',Validators.required),
      startDate: new FormControl('',Validators.required),
      endDate: new FormControl('',Validators.required),
      deposit: new FormControl('',Validators.required),
      employee: new FormControl('',Validators.required),
      customer: new FormControl('',Validators.required),
      facility: new FormControl('',Validators.required),
    })
  }
  get cont() {
    return this.contract.controls;
  }
  ngOnInit(): void {
  }
  createContract() {
    console.log(this.contract.value);
  }
}
